import type { Context } from "hono";
import authService from "../services/auth.service";
import type { userLoginReq, userSignupReq } from "../models/auth.model";

export const signup = async (c: Context) => {
    const request = await c.req.json() as userSignupReq;

    const response = await authService.signup(request);

    return c.json(response)
}

export const login = async (c: Context) => {
    const request = await c.req.json() as userLoginReq;

    const response = await authService.login(request, c);

    return c.json(response);
}

export const signout = async (c: Context) => {
    await authService.signout(c);
}

export default {
    signup,
    login,
    signout,
}