import { z } from "zod";

export const SIGNUP = z.object({
    username: z.string().min(5).max(100).nonempty(),
    email: z.string().min(5).max(100).email().nonempty(),
    password: z.string().min(5).max(100).nonempty(),
})

export const LOGIN = z.object({
    email: z.string().min(5).max(100).email().nonempty(),
    password: z.string().min(5).max(100).nonempty(),
})