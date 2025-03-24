import { z, ZodType } from "zod";

export const POSTTODO: ZodType = z.object({
    title: z.string().min(5).max(100).nonempty(),
    description: z.string().min(5).nonempty(),
    userId: z.number(),
});

export const UPDATETODO: ZodType = z.object({
    title: z.string().min(5).max(100).nonempty(),
    description: z.string().min(5).nonempty(),
});