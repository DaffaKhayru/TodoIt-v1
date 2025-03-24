import { prismaClient } from "../src/config/database"

export const createUser = async () => {
    const response = await prismaClient.user.create({
        data: {
            username: "daffakhayru",
            email: "daffakhayru@gmail.com",
            password: await Bun.password.hash("daffa123", {
                algorithm: 'bcrypt',
                cost: 10
            })
        }
    });

    return response;
}

export const deleteUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: "daffakhayru@gmail.com"
        }
    })
}

export const createTodo = async (userId: string) => {
    const response = await prismaClient.todo.create({
        data: {
            title: "First title",
            description: "This is first title",
            userId: userId
        }
    });

    return response;
}

export const deleteTodo = async (userId: string) => {
    await prismaClient.todo.deleteMany({
        where: {
            userId: userId,
        }
    });
}