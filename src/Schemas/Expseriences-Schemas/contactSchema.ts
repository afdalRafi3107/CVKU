import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Nama wajib diisi" }),
  email: z.string().email({ message: "Email tidak valid" }),
  subjek: z.string().min(1, { message: "Subjek tidak boleh kosong" }),
  message: z.string().min(1, { message: "Pesan tidak boleh kosong" }),
});

export type contactSchemaDTO = z.infer<typeof contactSchema>;
