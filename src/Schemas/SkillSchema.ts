import z from "zod";

export const skillSchemas = z.object({
  name1: z.string().min(1, "skill wajib diisi"),
});

export type skillSchemasDTO = z.infer<typeof skillSchemas>;
