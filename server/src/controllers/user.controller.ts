import type { Context } from "hono";
import userService from "../services/user.service";
import type { updateUserReq } from "../models/user.model";

const getUser = async (c: Context) => {
    const {id} = await c.req.param();

    const response = await userService.getUser(id!);

    return c.json(response);
};

const updateUser = async (c: Context) => {
    const {id} = await c.req.param();
    const request = await c.req.json() as updateUserReq;

    const response = await userService.updateUser(id!,request!);

    return c.json(response);
};

const deleteUser = async (c: Context) => {
    const {id} = await c.req.param();

    const response = await userService.deleteUser(id!);

    return c.json(response);
};

export default {
    getUser,
    updateUser,
    deleteUser,
}