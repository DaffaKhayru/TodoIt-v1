import { z, ZodType } from "zod";

export const POSTTODO: ZodType = z.object({
    title: z.string().min(5).max(100).nonempty(),
    description: z.string().min(5).nonempty(),
    userId: z.string().nonempty(),
});

export const UPDATETODO: ZodType = z.object({
    title: z.string().min(5).max(100).nonempty(),
    description: z.string().min(5).nonempty(),
});