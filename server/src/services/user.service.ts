import { prismaClient } from "../config/database";
import type { updateUserReq } from "../models/user.model";
import { UPDATEUSER } from "../validations/user.validation";

const getUser = async (id: string) => {
    // get user by id
    const getUser = await prismaClient.user.findFirst({
        where: {
            id: id,
        }
    });

    // give response
    return getUser
};

const updateUser = async (id: string, reqBody: updateUserReq) => {
    // validate request body
    const userReq = UPDATEUSER.parse(reqBody);

    // update user profile
    await prismaClient.user.update({
        where: {
            id: id
        },
        data: userReq
    });

    // return response
    return { msg: "Update user profile success" }
};

const deleteUser = async (id: string) => {
    // delete user by id
    await prismaClient.user.deleteMany({
        where: {
            id: id,
        }
    });

    // return response
    return { msg: "Delete user success" }
};

export default {
    getUser,
    updateUser,
    deleteUser,
}