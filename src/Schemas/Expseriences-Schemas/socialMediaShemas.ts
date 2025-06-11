import z from "zod";

export const socialSchema = z.object({
  ig: z.string().min(1),
  fb: z.string().min(1),
  lk: z.string().min(1),
  git: z.string().min(1),
});

export type socialSchemaDTO = z.infer<typeof socialSchema>;
