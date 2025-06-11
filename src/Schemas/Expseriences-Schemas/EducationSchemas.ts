import z from "zod";

export const month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const educationSchema = z
  .object({
    degree: z.string().min(1, "Gelar Wajib diisi"),
    city: z.string().min(1, "Nama kota wajib diisi"),
    school: z.string().min(1, "Nama perguruan tinggi wajib diisi"),
    startMonth: z.string().min(1, "Pilih bulan mulai"),
    endMonth: z.string().min(1, "Pilih bulan selesai"),
    startYear: z.string().min(1, "Pilih tahun mulai"),
    endYear: z.string().min(1, "Pilih tahun selesai"),
    description: z.string().min(1, "Deskripsi wajib diisi"),
    major: z.string().min(1, "Jurusan harus di diisi"),
  })
  .refine(
    (data) =>
      Number(data.endYear) > Number(data.startYear) ||
      (data.endYear === data.startYear &&
        month.indexOf(data.endMonth) >= month.indexOf(data.startMonth)),
    {
      message: "Tahun selesai tidak boleh sebelum tahun mulai",
      path: ["endYear"],
    }
  );

export type EducationSchema = z.infer<typeof educationSchema>;
