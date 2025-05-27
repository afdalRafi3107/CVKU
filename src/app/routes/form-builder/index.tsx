import InputDemo from "@/components/input-12";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const months = [
//   { label: "January", value: "01" },
//   { label: "February", value: "02" },
//   { label: "March", value: "03" },
//   { label: "April", value: "04" },
//   { label: "May", value: "05" },
//   { label: "June", value: "06" },
//   { label: "July", value: "07" },
//   { label: "August", value: "08" },
//   { label: "September", value: "09" },
//   { label: "October", value: "10" },
//   { label: "November", value: "11" },
//   { label: "December", value: "12" },
// ];

function FormBuilder() {
  let i = 0;
  let day = "";
  while (i < 31) {
    day = String(i + 1);
    i++;
  }

  return (
    <div>
      {/* <nav>Navbar</nav> */}
      <div className="flex flex-col w-full justify-center items-center gap-10 my-10">
        <Card className="w-[50%]">
          <CardHeader>
            <div className="flex flex-col border-b-1 w-full py-5">
              <CardTitle>Detail Pribadi</CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </div>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="flex w-full items-center gap-4">
                <InputDemo />
                <div className="flex flex-col w-full p-3 space-y-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="first-name">Nama Depan</Label>
                    <Input id="first-name" placeholder="" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="last-name">Nama Belakang</Label>
                    <Input id="last-name" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Alamat Email</Label>
                    <Input id="email" placeholder="" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone_number">Nomor Telepon</Label>
                    <Input id="phone_number" placeholder="" />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="address">Alamat</Label>
                  <Input id="address" placeholder="" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="postal_code">Kode Pos</Label>
                  <Input id="postal_code" placeholder="" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="city">Kota</Label>
                  <Input id="city" placeholder="" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="city">Tanggal Lahir</Label>
                  <div className="flex gap-3">
                    <Select>
                      <SelectTrigger className="w-[31%]">
                        <SelectValue placeholder="Tanggal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Tanggal</SelectLabel>
                          {}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[31%]">
                        <SelectValue placeholder="Bulan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Bulan</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[31%]">
                        <SelectValue placeholder="Tahun" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Tahun</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone_number">Tempat Lahir</Label>
                  <Input id="phone_number" placeholder="" />
                </div>
              </div>
              {/* <div className="grid grid-flow-col bg-amber-500 grid-rows-3 gap-4">
                <div className="row-span-3 bg-amber-100">01</div>
                <div className="col-span-2 bg-amber-200">02</div>
                <div className="col-span-2 row-span-2 bg-amber-300">03</div>
              </div> */}
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Next</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default FormBuilder;
