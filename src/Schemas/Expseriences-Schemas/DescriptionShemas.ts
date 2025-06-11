import z from "zod";

export const descriptionSchema = z.object({
  description: z.string().min(1, "Deskripsi harus diisi"),
});

export type descriptionSchemaDTO = z.infer<typeof descriptionSchema>;
