import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import {
  BsBriefcaseFill,
  BsFacebook,
  // BsFillPaletteFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { IoSave } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  descriptionSchema,
  type descriptionSchemaDTO,
} from "@/Schemas/Expseriences-Schemas/DescriptionShemas";
import {
  educationSchema,
  month,
  type EducationSchema,
} from "@/Schemas/Expseriences-Schemas/EducationSchemas";
import { useDescriptionStore } from "@/store/exsperinceStore/descriptionStore";
import { useEducationStore } from "@/store/exsperinceStore/educationStore";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import {
  experiencesSchema,
  type experiencesSchemaDTO,
} from "@/Schemas/Expseriences-Schemas/ExperiencesSchemas";
// import {
//   hobbySchema,
//   type hobbySchemaDTO,
// } from "@/Schemas/Expseriences-Schemas/HobbyScemas";
import {
  socialSchema,
  type socialSchemaDTO,
} from "@/Schemas/Expseriences-Schemas/socialMediaShemas";
import {
  SkillSchemas,
  type skillSchemasDTO,
} from "@/Schemas/Expseriences-Schemas/SkillSchema";
import { useExperiencesStore } from "@/store/exsperinceStore/experienceStore";
// import { useHobbyStore } from "@/store/exsperinceStore/hobbyStore";
import { useSkillStore } from "@/store/exsperinceStore/skillStore";
import { useSocialStore } from "@/store/exsperinceStore/socialMediaStore";
import DinamicFields from "@/components/DinamicFileds";

export function ExPeriences() {
  const Navigate = useNavigate();

  // useform untuk Educatioan card
  return (
    <section className="flex flex-col gap-5 mb-10 ">
      {/* profile card */}
      <ProfileCard />
      {/* education Card */}
      <EducationCard />
      {/* Pengalaman */}
      <Experience />
      {/* Hobi
      <HobbyCard /> */}
      {/* Social Media */}
      <SocialMedia />
      {/* Keahlian */}
      <Skill />
      <div className="m-auto w-fit">
        <Button
          className="m-auto h-12 text-2xl flex items-center bg-green-500 hover:bg-green-400 cursor-pointer"
          onClick={() => {
            Navigate("/cv-builder/generate-pdf");
          }}
        >
          Langkah Selanjutnya
        </Button>
      </div>
    </section>
  );
}

function ProfileCard() {
  const setDescriptions = useDescriptionStore((s) => s.setDescription);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<descriptionSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(descriptionSchema),
  });

  const onSubmit = (data: descriptionSchemaDTO) => {
    setDescriptions(data);
    console.log("descipsi profile : ", data);
  };
  return (
    <>
      {/* profile card */}
      <div className="ProfileCart-Form m-auto  w-2/4 border p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <FaUserCircle />
          <p>Profile</p>
        </div>
        <form
          action=""
          className="p-4 flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-3">
            <span className="font-bold">Deskripsi</span>
            <Textarea {...register("description")} className="h-50" required />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="end-3 text-right">
            <Button variant={"outline"} type="submit">
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

function EducationCard() {
  const [years, setYears] = useState<number[]>([]);
  const setEducations = useEducationStore((s) => s.setEducation);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 1990; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []); // dijalankan sekali saat komponen pertama kali dimount

  // useform untuk Educatioan card
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EducationSchema>({
    mode: "onChange",
    resolver: zodResolver(educationSchema),
  });
  const onSubmit = (data: EducationSchema) => {
    setEducations(data);
    console.log("data yang di simpan adalah : ", data);
  };
  return (
    <>
      <div className="EducationCart-Form m-auto  w-2/4 border p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <GiGraduateCap />
          <p>Pendidikan dan kualifikasi</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="p-4 flex flex-col gap-3"
        >
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span className="font-bold">Gelar</span>
              <Input {...register("degree")} placeholder="mis. S.Pd" />
              {errors.degree && (
                <p className="text-red-500 text-sm">{errors.degree.message}</p>
              )}
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span className="font-bold">Kota</span>
              <Input {...register("city")} placeholder="mis. Jakarta" />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span className="font-bold">Sekolah</span>
            <Input
              {...register("school")}
              placeholder="mis. Universitas Indonesia"
            />
            {errors.school && (
              <p className="text-red-500 text-sm">{errors.school.message}</p>
            )}
            <span className="font-bold">Jurusan</span>
            <Input
              {...register("major")}
              placeholder="Mis. Teknik mesin / IPA"
            />
            {errors.major && (
              <p className="text-red-500 text-sm">{errors.major.message}</p>
            )}
          </div>
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span className="font-bold">Tanggal Mulai</span>
              <div className=" flex gap-3">
                {/* Month start */}
                <Select
                  onValueChange={(val: string) => setValue("startMonth", val)}
                >
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {month.map((m) => (
                        <SelectItem value={`${m}`}>{m}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.startMonth && (
                  <p className="text-red-500 text-sm">
                    {errors.startMonth.message}
                  </p>
                )}
                {/* Years start */}
                <Select
                  onValueChange={(val: string) => setValue("startYear", val)}
                >
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {years.map((y) => (
                        <SelectItem value={`${y}`}>{y}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.startYear && (
                  <p className="text-red-500 text-sm">
                    {errors.startYear.message}
                  </p>
                )}
              </div>
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span className="font-bold">Tanggal Selesai</span>
              <div className=" flex gap-3">
                {/* Month End */}
                <Select
                  onValueChange={(val: string) => setValue("endMonth", val)}
                >
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {month.map((m) => (
                        <SelectItem value={`${m}`}>{m}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.endMonth && (
                  <p className="text-red-500 text-sm">
                    {errors.endMonth.message}
                  </p>
                )}
                {/* Years End*/}
                <Select
                  onValueChange={(val: string) => {
                    setValue("endYear", val);
                  }}
                >
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {years.map((y) => (
                        <SelectItem value={`${y}`}>{y}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.endYear && (
                  <p className="text-red-500 text-sm">
                    {errors.endYear.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span className="font-bold">Deskripsi</span>
            <Textarea {...register("description")} className="h-50" />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="end-3 text-right">
            <Button type="submit" variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

function Experience() {
  const setExperience = useExperiencesStore((s) => s.setExperience);
  const months = [
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
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 1990; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<experiencesSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(experiencesSchema),
  });

  const onSubmit = (data: experiencesSchemaDTO) => {
    setExperience(data);
    console.log("data pengalaman yang di simpan : ", data);
  };
  return (
    <div className="ExperienceCart-Form m-auto  w-2/4 border p-4 rounded-2xl">
      <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
        <BsBriefcaseFill />
        <p>Pengalaman Kerja</p>
      </div>
      <form
        action=""
        className="p-4 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-3">
          <div className=" flex flex-col gap-3 w-1/2">
            <span className="font-bold">Posisi Kerja</span>
            <Input {...register("position")} placeholder="mis. Manager" />
            {errors.position && (
              <p className="text-red-500 text-sm">{errors.position.message}</p>
            )}
          </div>
          <div className=" flex flex-col gap-3 w-1/2">
            <span className="font-bold">Kota</span>
            <Input {...register("city")} placeholder="mis. Jakarta" />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <span className="font-bold">Perusahaan</span>
          <Input {...register("company")} placeholder="mis. PT Jaya Abadi" />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>
        <div className="flex w-full gap-3">
          <div className=" flex flex-col gap-3 w-1/2">
            <span className="font-bold">Tanggal Mulai</span>
            <div className=" flex gap-3">
              <Select
                onValueChange={(val: string) => setValue("startMonth", val)}
              >
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Bulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {months.map((m) => (
                      <SelectItem value={`${m}`}>{m}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.startMonth && (
                <p className="text-red-500 text-sm">
                  {errors.startMonth.message}
                </p>
              )}
              {/* Years start */}
              <Select
                onValueChange={(val: string) => setValue("startYear", val)}
              >
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Tahun" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {years.map((y) => (
                      <SelectItem value={`${y}`}>{y}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.startYear && (
                <p className="text-red-500 text-sm">
                  {errors.startYear.message}
                </p>
              )}
            </div>
          </div>
          <div className=" flex flex-col gap-3 w-1/2">
            <span className="font-bold">Tanggal Selesai</span>
            <div className=" flex gap-3">
              {/* Month End */}
              <Select
                onValueChange={(val: string) => setValue("endMonth", val)}
              >
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Bulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {months.map((m) => (
                      <SelectItem value={`${m}`}>{m}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.endMonth && (
                <p className="text-red-500 text-sm">
                  {errors.endMonth.message}
                </p>
              )}
              {/* Years End */}
              <Select onValueChange={(val: string) => setValue("endYear", val)}>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Bulan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {years.map((y) => (
                      <SelectItem value={`${y}`}>{y}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.endYear && (
                <p className="text-red-500 text-sm">{errors.endYear.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <span className="font-bold">Deskripsi</span>
          <Textarea {...register("description")} className="h-50" required />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="end-3 text-right">
          <Button variant={"outline"} type="submit">
            <IoSave />
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}

// function HobbyCard() {
//   const setHobby = useHobbyStore((s) => s.setHobby);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<hobbySchemaDTO>({
//     mode: "onChange",
//     resolver: zodResolver(hobbySchema),
//   });

//   const onSubmit = (data: hobbySchemaDTO) => {
//     setHobby(data);
//     console.log("Hobby", data);
//   };
//   return (
//     <div className="HobbyCart-Form m-auto  w-2/4 border p-4 rounded-2xl">
//       <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
//         <BsFillPaletteFill />
//         <p>Minat</p>
//       </div>
//       <form
//         action=""
//         className="p-4 flex flex-col gap-3"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className=" flex flex-col gap-3">
//           <span className="font-bold">Hobi</span>
//           <Input
//             {...register("hobby")}
//             placeholder="mis. Membaca, Kuliner"
//             required
//           />
//           {errors.hobby && (
//             <p className="text-red-500 text-sm">{errors.hobby.message}</p>
//           )}
//         </div>

//         <div className="end-3 text-right">
//           <Button variant={"outline"} type="submit">
//             <IoSave />
//             Simpan
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

function SocialMedia() {
  const setSocial = useSocialStore((s) => s.setSocial);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<socialSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(socialSchema),
  });

  const onSubmit = (data: socialSchemaDTO) => {
    setSocial(data);
    console.log("Social Media : ", data);
  };
  return (
    <div className="SocialCard-Form Profile m-auto  w-2/4 border p-4 rounded-2xl">
      <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
        <CgMediaLive />
        <p>Social Media</p>
      </div>
      <form
        action=""
        className="p-4 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3 w-full">
          <div className="flex flex-col gap-3 w-1/2">
            <div className=" flex  gap-3 items-center">
              <BsLinkedin className="text-3xl" />
              <Input {...register("lk")} placeholder="Username" required />
            </div>
            <div className=" flex gap-3 items-center">
              <BsInstagram className="text-3xl" />
              <Input {...register("ig")} placeholder="Username" required />
              {errors.ig && (
                <p className="text-red-500 text-sm">{errors.ig.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div className=" flex  gap-3 items-center">
              <BsGithub className="text-3xl" />
              <Input {...register("git")} placeholder="Username" required />
              {errors.git && (
                <p className="text-red-500 text-sm">{errors.git.message}</p>
              )}
            </div>
            <div className=" flex gap-3 items-center">
              <BsFacebook className="text-3xl" />
              <Input {...register("fb")} placeholder="Username" required />
              {errors.fb && (
                <p className="text-red-500 text-sm">{errors.fb.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="end-3 text-right">
          <Button variant={"outline"} type="submit">
            <IoSave />
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
}

function Skill() {
  const method = useForm<skillSchemasDTO>({
    resolver: zodResolver(SkillSchemas),
    defaultValues: { nama: [{ skill: "" }] },
  });

  const setSkill = useSkillStore((s) => s.setData);

  const onSubmit = (data: skillSchemasDTO) => {
    console.log("yang tersubmit : ", data);
    setSkill(data);
  };
  return (
    <div className="CARD Profile m-auto  w-2/4 border p-4 rounded-2xl">
      <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
        <FaBrain />
        <p>Keahlian</p>
      </div>
      <div>
        <FormProvider {...method}>
          <form
            action=""
            onSubmit={method.handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-3"
          >
            <DinamicFields />
            <div className="end-3 text-right">
              <Button variant={"outline"} type="submit">
                <IoSave />
                Simpan
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      {/* <div className="flex gap-3 w-full">
        <div className="flex flex-col gap-3 w-full">
          <div className=" flex flex-col gap-3">
            <p className="font-bold">Keahlian</p>
            <div>
              {skill.map((skill, index) => (
                <li key={index}>
                  {skill}{" "}
                  <Button
                    onClick={() => hapusSkill(index)}
                    className="p-0 h-0 w-fit text-red-400 text-sm italic underline ml-2 font-light cursor-pointer"
                  >
                    hapus
                  </Button>
                </li>
              ))}
            </div>
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setinput(e.target.value)}
                placeholder="Mis. PHP"
              />

              <Button onClick={tambahSkill}>Tambah</Button>
            </div>
          </div>
        </div>
      </div>
      <form
        action=""
        className="p-4 flex flex-col text-right"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("name1")}
          value={str}
          className="w-2 h-0 border-0 text-right mb-0 ml-[95%]"
        />
        <div className="end-3 text-right -mt-3">
          <Button variant={"outline"} type="submit">
            <IoSave />
            Simpan
          </Button>
        </div>
      </form> */}
    </div>
  );
}
