import { prismaClient } from "../config/database"
import type { todoPostReq, todoUpdateReq } from "../models/todo.model";
import { POSTTODO, UPDATETODO } from "../validations/todo.validation";

export const findTodos = async (user_id: string) => {
    // find all todos 
    const findTodos = await prismaClient.todo.findMany({
        where: {
            userId: user_id
        }
    });

    // give response
    return { findTodos }
}

export const findTodo = async (user_id: string, id: string) => {
    // find todo
    const findTodo = await prismaClient.todo.findFirst({
        where: {
            userId: user_id,
            id: id
        }
    });

    // give response
    return { findTodo }
}

export const postTodo = async (reqBody: todoPostReq) => {
    // validate user body request
    const todoReq = POSTTODO.parse(reqBody);

    // create new todo
    await prismaClient.todo.create({
        data: todoReq
    });

    // give return
    return { msg: "New todo created" }
}

export const updateTodo = async (user_id: string,id: string,reqBody: todoUpdateReq) => {
    // validate request body
    const todoReq = UPDATETODO.parse(reqBody);

    // update existing todo 
    await prismaClient.todo.update({
        data: todoReq,
        where: {
            userId: user_id,
            id: id,
        }
    });

    return { msg: "Update todo success"}
}

export const deleteTodo = async (user_id: string,id: string) => {
    // delete todo
    await prismaClient.todo.delete({
        where: {
            userId: user_id,
            id: id
        }
    });

    // give response
    return { msg: "Todo success deleted" }
}

export default {
    findTodos,
    findTodo,
    postTodo,
    updateTodo,
    deleteTodo,
}