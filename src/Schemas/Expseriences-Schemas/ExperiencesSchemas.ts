import z from "zod";

export const experiencesSchema = z
  .object({
    position: z.string().min(1, "Pisisi harus diisi"),
    city: z.string().min(1, "Kota wajib diisi"),
    company: z.string().min(1, "Nama perusahaan wajib diisi"),
    startMonth: z.string().min(1, "Bulan mulai wajib diisi"),
    startYear: z.string().min(1, "Tahun mulai wajib diisi"),
    endMonth: z.string().min(1, "Bulan selesai wajib diisi"),
    endYear: z.string().min(1, "Tahun selesai wajib diisi"),
    description: z.string().min(1, "Deskripsi wajin diisi"),
  })
  .refine(
    (data) =>
      Number(data.endYear) > Number(data.startYear) ||
      data.endYear === data.startYear,
    {
      message: "Tahun selesai tidak boleh di atas tahun mulai",
      path: ["endYear"],
    }
  );

export type experiencesSchemaDTO = z.infer<typeof experiencesSchema>;
