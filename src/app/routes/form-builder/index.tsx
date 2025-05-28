import DaySelect from "@/components/forms/DaySelect";
import MonthSelect from "@/components/forms/MonthSelect";
import YearSelect from "@/components/forms/YearSelect";
import InputFileImage from "@/components/input-12";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormPersonalDetailSchema,
  type PersonalDetailDTO,
} from "@/schema/FormPersonalDetail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function FormBuilder() {
  const [month, setMonth] = useState<string | undefined>();

  // const formSchema = z.object({
  //   username: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  // });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  const form = useForm<PersonalDetailDTO>({
    resolver: zodResolver(FormPersonalDetailSchema),
  });

  function onSubmit(values: z.infer<typeof FormPersonalDetailSchema>) {
    console.log(values);
  }

  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center gap-10 my-10">
        <Card className="w-[50%]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.error("form validation errors:", errors);
              })}
              className="flex flex-col gap-4"
            >
              <CardHeader>
                <div className="flex flex-col border-b-1 w-full py-5">
                  <CardTitle>Detail Pribadi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-4">
                    <InputFileImage />
                    <div className="flex flex-col w-full p-3 space-y-4">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="first-name">Nama Depan</Label>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  id="first-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="last-name">Nama Belakang</Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="last-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="email">Email</Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="phone-number">
                                Nomor Telepon
                              </Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="phone-number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="address">Alamat</Label>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                id="address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="postal-code">Kode Pos</Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="postal-code"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="city">Kota</Label>
                              <FormControl>
                                <Input placeholder="Doe" id="city" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        {/* Select Tanggal Lahir */}
                        <Label htmlFor="city">Tanggal Lahir</Label>
                        <div className="flex gap-3">
                          <DaySelect />
                          <MonthSelect value={month} onChange={setMonth} />
                          <YearSelect />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="birthPlace"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="birth-place">Tempat Lahir</Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="birth-place"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="linkedinUrl"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="url-linkedin">
                              URL Profil Linkedin
                            </Label>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                id="url-linkedin"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="websiteUrl"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="websiteUrl">
                              Website, Github, dll
                            </Label>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                id="websiteUrl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {/* <Button variant="outline">Cancel</Button> */}
                <Button type="submit">Next</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default FormBuilder;
