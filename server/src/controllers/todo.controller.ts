import type { Context } from "hono";
import todoService from "../services/todo.service";
import type { todoPostReq, todoUpdateReq } from "../models/todo.model";

export const findTodos = async (c: Context) => {
    const {user_id} = await c.req.param();

    const response = await todoService.findTodos(user_id!);

    return c.json(response);
}

export const findTodo = async (c: Context) => {
    const {user_id,id} = await c.req.param();

    const response = await todoService.findTodo(user_id!,id!);

    return c.json(response);
}

export const postTodo = async (c: Context) => {
    const request = await c.req.json() as todoPostReq;

    const response = await todoService.postTodo(request);

    return c.json(response);
}

export const updateTodo = async (c: Context) => {
    const {user_id,id} = c.req.param();
    const request = await c.req.json() as todoUpdateReq;
    
    const response = await todoService.updateTodo(user_id!,id!,request);

    return c.json(response);
}

export const deleteTodo = async (c: Context) => {
    const {user_id,id} = c.req.param();

    const response = await todoService.deleteTodo(user_id!,id!);

    return c.json(response);
}

export default {
    findTodos,
    findTodo,
    postTodo,
    updateTodo,
    deleteTodo,
}