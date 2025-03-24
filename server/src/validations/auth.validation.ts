import { z, ZodType } from "zod";

export const SIGNUP: ZodType = z.object({
    username: z.string().min(5).max(100).nonempty(),
    email: z.string().min(5).max(100).email().nonempty(),
    password: z.string().min(5).max(100).nonempty(),
})

export const LOGIN: ZodType = z.object({
    email: z.string().min(5).max(100).email().nonempty(),
    password: z.string().min(5).max(100).nonempty(),
})