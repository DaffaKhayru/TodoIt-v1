import { HTTPException } from "hono/http-exception";
import { prismaClient } from "../config/database";
import type { userLoginReq, userSignupReq } from "../models/auth.model";
import { LOGIN, SIGNUP } from "../validations/auth.validation"
import jwt from 'jsonwebtoken';
import { setCookie } from 'hono/cookie'; 
import type { Context } from "hono";

export const signup = async (reqBody: userSignupReq) => {
    // validate request 
    const userReq = SIGNUP.parse(reqBody);

    // find user 
    const findUser = await prismaClient.user.findFirst({
        where: {
            email: userReq.email
        }
    });

    // check if finduser is exist or not
    if(findUser) {
        throw new HTTPException(400, { message: "User already exist" });
    }

    // hash password
    const hashingPassword = await Bun.password.hash(userReq.password, {
        algorithm: "bcrypt",
        cost: 10
    });

    // create new user in database
    await prismaClient.user.create({
        data: {
            username: userReq.username,
            email: userReq.email,
            password: userReq.password
        }
    });

    return { msg: "Signup success" }
}

export const login = async (reqBody: userLoginReq, c: Context) => {
    // validate user request
    const userReq = LOGIN.parse(reqBody);

    // find user 
    const findUser = await prismaClient.user.findFirst({
        where: {
            email: userReq.email
        }
    });

    // check user is doesnt exist
    if(!findUser) {
        throw new HTTPException(400, { message: "User doesn't exist" });
    }

    // compare password 
    const comparePassword = await Bun.password.verify(userReq.password, findUser.password, 'bcrypt');

    // check if password valid or not
    if(!comparePassword) {
        throw new HTTPException(400, { message: "Password is invalid" });
    }

    // read value from env file
    const secretKey = process.env.SECRET_KEY;

    // check if secret key is null or not
    if(!secretKey) {
        throw new Error("Missing secret key in ")
    }

    // sign jwt token
    const genToken = jwt.sign(findUser, secretKey, { expiresIn: '10h' });

    // set cookies to user client
    setCookie(c, 'auth_token', genToken, {
        secure: true,
        httpOnly: true,
        maxAge: 60 * 60,
    });

    // return value
    return {
        msg: "Login success",
        userId: findUser.id,
        username: findUser.username,
        email: findUser.email,
        token: genToken,
    }
}

export const signout = async (c: Context) => {
    // clear all token in cookies
    setCookie(c, 'auth_token', "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
    });
}

export default {
    signup,
    login,
    signout,
}