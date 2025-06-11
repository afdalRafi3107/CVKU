import z from "zod";

export const skillItemSchemas = z.object({
  skill: z.string().min(1, "skill wajib diisi"),
});

export const SkillSchemas = z.object({
  nama: z.array(skillItemSchemas),
});

export type skillSchemasDTO = z.infer<typeof SkillSchemas>;
