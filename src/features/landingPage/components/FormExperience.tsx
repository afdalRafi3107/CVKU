import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import {
  BsBriefcaseFill,
  BsFacebook,
  BsFillPaletteFill,
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

export function Pengalaman() {
  return (
    <section className="flex flex-col gap-5 mb-10 ">
      {/* profile card */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <FaUserCircle />
          <p>Profile</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className=" flex flex-col gap-3">
            <span>Deskripsi</span>
            <Textarea className="h-50" required />
          </div>

          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      {/* education Card */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <GiGraduateCap />
          <p>Pendidikan dan kualifikasi</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Gelar</span>
              <Input placeholder="mis. S.Pd" required />
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Kota</span>
              <Input placeholder="mis. Jakarta" required />
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span>Sekolah</span>
            <Input placeholder="mis. Universitas Indonesia" required />
          </div>
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Tanggal Mulai</span>
              <div className=" flex gap-3">
                <AddStartDate />
                <AddStartYear />
              </div>
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Tanggal Selesai</span>
              <div className=" flex gap-3">
                <AddEndDate />
                <AddEndYear />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span>Deskripsi</span>
            <Textarea className="h-50" required />
          </div>
          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      {/* Pengalaman */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <BsBriefcaseFill />
          <p>Pengalaman Kerja</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Posisi Kerja</span>
              <Input placeholder="mis. Manager" required />
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Kota</span>
              <Input placeholder="mis. Jakarta" required />
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span>Perusahaan</span>
            <Input placeholder="mis. PT Jaya Abadi" required />
          </div>
          <div className="flex w-full gap-3">
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Tanggal Mulai</span>
              <div className=" flex gap-3">
                <StartDateJob />
                <StartYearJob />
              </div>
            </div>
            <div className=" flex flex-col gap-3 w-1/2">
              <span>Tanggal Selesai</span>
              <div className=" flex gap-3">
                <EndDateJob />
                <EndYearJob />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <span>Deskripsi</span>
            <Textarea className="h-50" required />
          </div>
          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      {/* Hobi */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <BsFillPaletteFill />
          <p>Minat</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className=" flex flex-col gap-3">
            <span>Hobi</span>
            <Input placeholder="mis. Membaca, Kuliner" required />
          </div>

          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      {/* Social Media */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <CgMediaLive />
          <p>Social Media</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-3 w-1/2">
              <div className=" flex  gap-3 items-center">
                <BsLinkedin className="text-3xl" />
                <Input placeholder="Username" required />
              </div>
              <div className=" flex gap-3 items-center">
                <BsInstagram className="text-3xl" />
                <Input placeholder="Usernmae" required />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <div className=" flex  gap-3 items-center">
                <BsGithub className="text-3xl" />
                <Input placeholder="Username" required />
              </div>
              <div className=" flex gap-3 items-center">
                <BsFacebook className="text-3xl" />
                <Input placeholder="Username" required />
              </div>
            </div>
          </div>

          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      {/* Keahlian */}
      <div className="CARD Profile m-auto  w-2/4 border-2 p-4 rounded-2xl">
        <div className="flex items-center gap-3 text-2xl font-semibold border-b-2 p-4   ">
          <FaBrain />
          <p>Keahlian</p>
        </div>
        <form action="" className="p-4 flex flex-col gap-3">
          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-3 w-full">
              <div className=" flex flex-col gap-3">
                <p>Keahlian 1</p>
                <div className="flex gap-3">
                  <Input placeholder="Mis. Ms Word" required />
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Ahli">Ahli</SelectItem>
                        <SelectItem value="Berpengalaman">
                          Berpengalaman
                        </SelectItem>
                        <SelectItem value="Menengah">Menengah</SelectItem>
                        <SelectItem value="Pemula">Pemula</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <p>Keahlian 2</p>
                <div className="flex gap-3">
                  <Input placeholder="Mis. Ms Word" required />
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Ahli">Ahli</SelectItem>
                        <SelectItem value="Berpengalaman">
                          Berpengalaman
                        </SelectItem>
                        <SelectItem value="Menengah">Menengah</SelectItem>
                        <SelectItem value="Pemula">Pemula</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className=" flex flex-col gap-3">
                <p>Keahlian 3</p>
                <div className="flex gap-3">
                  <Input placeholder="Mis. Ms Word" required />
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Ahli">Ahli</SelectItem>
                        <SelectItem value="Berpengalaman">
                          Berpengalaman
                        </SelectItem>
                        <SelectItem value="Menengah">Menengah</SelectItem>
                        <SelectItem value="Pemula">Pemula</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="end-3 text-right">
            <Button variant={"outline"}>
              <IoSave />
              Simpan
            </Button>
          </div>
        </form>
      </div>
      <div className="m-auto w-fit">
        <Button className="m-auto h-12 text-2xl flex items-center bg-green-500 hover:bg-green-400 cursor-pointer">
          Langkah Selanjutnya
        </Button>
      </div>
    </section>
  );
}

// start Year
function AddStartDate() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bulan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Januari">Januari</SelectItem>
            <SelectItem value="Februari">Februari</SelectItem>
            <SelectItem value="Maret">Maret</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="Mai">Mai</SelectItem>
            <SelectItem value="Juni">Juni</SelectItem>
            <SelectItem value="Juli">Juli</SelectItem>
            <SelectItem value="Agustus">Agustus</SelectItem>
            <SelectItem value="Sebtember">Sebtember</SelectItem>
            <SelectItem value="Oktober">Oktober</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="Desember">Desember</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function AddStartYear() {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 2000; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []);
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tahun" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {years.map((t) => (
              <SelectItem value={`${t}`}>{t}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

// end Year
function AddEndDate() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bulan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Januari">Januari</SelectItem>
            <SelectItem value="Februari">Februari</SelectItem>
            <SelectItem value="Maret">Maret</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="Mai">Mai</SelectItem>
            <SelectItem value="Juni">Juni</SelectItem>
            <SelectItem value="Juli">Juli</SelectItem>
            <SelectItem value="Agustus">Agustus</SelectItem>
            <SelectItem value="Sebtember">Sebtember</SelectItem>
            <SelectItem value="Oktober">Oktober</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="Desember">Desember</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function AddEndYear() {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 2000; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []); // dijalankan sekali saat komponen pertama kali dimount
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tahun" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {years.map((t) => (
              <SelectItem value={`${t}`}>{t}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

// start Year Pengalaman Kerja
function StartDateJob() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bulan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Januari">Januari</SelectItem>
            <SelectItem value="Februari">Februari</SelectItem>
            <SelectItem value="Maret">Maret</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="Mai">Mai</SelectItem>
            <SelectItem value="Juni">Juni</SelectItem>
            <SelectItem value="Juli">Juli</SelectItem>
            <SelectItem value="Agustus">Agustus</SelectItem>
            <SelectItem value="Sebtember">Sebtember</SelectItem>
            <SelectItem value="Oktober">Oktober</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="Desember">Desember</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function StartYearJob() {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 2000; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []);
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tahun" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {years.map((t) => (
              <SelectItem value={`${t}`}>{t}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

// end Year
function EndDateJob() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Bulan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Januari">Januari</SelectItem>
            <SelectItem value="Februari">Februari</SelectItem>
            <SelectItem value="Maret">Maret</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="Mai">Mai</SelectItem>
            <SelectItem value="Juni">Juni</SelectItem>
            <SelectItem value="Juli">Juli</SelectItem>
            <SelectItem value="Agustus">Agustus</SelectItem>
            <SelectItem value="Sebtember">Sebtember</SelectItem>
            <SelectItem value="Oktober">Oktober</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="Desember">Desember</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function EndYearJob() {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const tahun: number[] = [];
    for (let i = 2000; i <= 2025; i++) {
      tahun.push(i);
    }
    setYears(tahun);
  }, []); // dijalankan sekali saat komponen pertama kali dimount
  return (
    <>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tahun" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {years.map((t) => (
              <SelectItem value={`${t}`}>{t}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
