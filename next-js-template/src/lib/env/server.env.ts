import { z } from "zod";
const envSchema = z.object({
    ENV_VARIABLE: z.string().min(1, "ENV_VARIABLE not found"),
});
export const envServer = envSchema.parse(process.env);
