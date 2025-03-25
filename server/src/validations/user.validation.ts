import { z, type ZodType } from "zod";

export const UPDATEUSER: ZodType = z.object({
    username: z.string().min(5).max(100).nonempty(),
    email: z.string().min(5).max(100).email().nonempty(),
    password: z.string().min(5).max(100).nonempty(),
})