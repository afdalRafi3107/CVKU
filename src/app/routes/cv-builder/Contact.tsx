import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  type contactSchemaDTO,
} from "@/Schemas/Expseriences-Schemas/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import Footer from "../footer";

function Contact() {
  const [status, setStatus] = useState("");
  const { register, handleSubmit } = useForm<contactSchemaDTO>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (values: contactSchemaDTO) => {
    setStatus("Mengirim...");
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Ganti dengan Service ID dari EmailJS
        "YOUR_TEMPLATE_ID", // Ganti dengan Template ID dari EmailJS
        {
          from_name: values.name,
          reply_to: values.email,
          message: values.message,
        },
        "YOUR_PUBLIC_KEY" // Ganti dengan Public Key dari EmailJS
      )
      .then(
        () => {
          setStatus("Pesan berhasil dikirim!");
        },
        (error) => {
          console.error("Gagal:", error);
          setStatus("Gagal mengirim pesan.");
        }
      );
  };
  return (
    <>
      <section className="mt-5 mb-[20%]">
        <div className="flex flex-col gap-4 m-auto w-xl text-center">
          <p className=" font-bold text-4xl">Contact Form</p>
          <p className="text-gray-600">
            We’ll be happy to assist you and will get back to you as soon as
            possible.
          </p>
        </div>

        <div>
          <Card className="w-4xl m-auto mt-4">
            <CardContent className="flex flex-col gap-3">
              <div>
                <p className="text-xl font-extrabold text-gray-600">
                  Contact Form
                </p>
                <p className="w-2xl  text-gray-600 text-sm">
                  A trusted platform for creating professional CVs that help you
                  land your dream job. Our team is ready to assist — feel free
                  to send your questions or message below.
                </p>
              </div>
              <form action="">
                <div className=" grid gap-2">
                  <label htmlFor="name">Name</label>
                  <Input {...register("name")} id="name" />
                  <label htmlFor="email">Email</label>
                  <Input {...register("email")} id="email" />
                  <label htmlFor="subjek">Subjek</label>
                  <Input {...register("subjek")} id="subjek" />
                  <label htmlFor="pesan">Pesan</label>
                  <Textarea {...register("message")} id="pesan" />
                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Kirim
                  </Button>
                </div>
                {status && (
                  <p className="text-sm mt-2 text-muted-foreground">{status}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
