import { prismaClient } from "../src/config/database"

export const createUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "daffakhayru",
            email: "daffakhayru@gmail.com",
            password: await Bun.password.hash("daffa123", {
                algorithm: 'bcrypt',
                cost: 10
            })
        }
    })
}

export const deleteUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: "daffakhayru@gmail.com"
        }
    })
}