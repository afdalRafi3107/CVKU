import z from "zod";

export const hobbySchema = z.object({
  hobby: z.string().min(1, "Hobby harus diisi"),
});

export type hobbySchemaDTO = z.infer<typeof hobbySchema>;
