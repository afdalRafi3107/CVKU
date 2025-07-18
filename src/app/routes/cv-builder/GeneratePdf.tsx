import { useRef } from "react";
import jsPDF from "jspdf";
import { Page } from "@/components/Page";
import html2canvas from "html2canvas-pro";
import { usePersonalDetailsStore } from "@/stores/personalDetailsStore";

import { Button } from "@/components/ui/button";

import { useDescriptionStore } from "@/store/exsperinceStore/descriptionStore";
import { useEducationStore } from "@/store/exsperinceStore/educationStore";
import { useExperiencesStore } from "@/store/exsperinceStore/experienceStore";
import { useSocialStore } from "@/store/exsperinceStore/socialMediaStore";
import { useSkillStore } from "@/store/exsperinceStore/skillStore";
import { useProfileImageStore } from "@/store/exsperinceStore/imageStore";
import Footer from "../footer";

function GeneratePdf() {
  const jsPdfRef = useRef<HTMLDivElement | null>(null);
  const { data } = usePersonalDetailsStore();
  const { description } = useDescriptionStore();
  const { education } = useEducationStore();
  const { experience } = useExperiencesStore();
  const { social } = useSocialStore();
  const { data: skill } = useSkillStore();
  const { image: profileImage } = useProfileImageStore();

  const handleGeneratePdf = async () => {
    const element = jsPdfRef.current;
    if (!element) return;

    html2canvas(element, { useCORS: true }).then((canvas) => {
      const pdf = new jsPDF({
        unit: "px",
        hotfixes: ["px_scaling"],
        format: "a4",
      });

      pdf.setFont("Helvetica", "normal");
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;

      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save("test_cv.pdf");
    });
  };

  return (
    <>
      <section className="mb-15 mt-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-center max-w-[50%] w-full">
            <h1 className="py-5 text-4xl font-medium">Preview CV</h1>
            <Button
              onClick={handleGeneratePdf}
              className="border shadow-md text-2xl px-4 mt-2 py-2 h-fit"
            >
              Convert to PDF
            </Button>
          </div>
          <Page ref={jsPdfRef}>
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-md text-gray-800 font-sans">
              {/* Header */}
              <div className=" flex gap-4 items-end border-b pb-4 mb-6">
                <img
                  src={profileImage || "https://via.placeholder.com/200"}
                  alt=""
                  className="w-40 h-50 object-cover"
                />
                <div className=" flex flex-col gap-2">
                  <h1 className="text-5xl font-bold">
                    {data.firstName && data.firstName
                      ? `${data.firstName} ${data.firstName}`
                      : "Jhon Lenon"}
                  </h1>
                  <p className="text-sm">
                    {data.email ? `${data.email}` : "example@gamil.com"} |{" "}
                    {data.phoneNumber ? `${data.phoneNumber}` : "08xxxxxxxxxx"}
                  </p>
                  <p className="text-sm">
                    {data.address ? `${data.address}` : "Jl. Kenangan"},{" "}
                    {data.city ? `${data.city}` : "Ghotam"}{" "}
                    {data.postalCode ? `, ${data.postalCode}` : ""}
                  </p>
                  <p className="text-sm">
                    {data.linkedinUrl
                      ? `${data.linkedinUrl}`
                      : "https://www.linkedin.com/"}{" "}
                    |{" "}
                    {data.websiteUrl
                      ? `${data.websiteUrl}`
                      : "ttps://www.example.com/"}
                  </p>
                </div>
              </div>

              {/* Profile */}
              <div className="mb-2">
                <h2 className="text-xl font-semibold mb-2 bg-gray-500 text-white pl-2">
                  Profil
                </h2>
                <p>
                  {description?.description
                    ? `${description?.description}`
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                </p>
              </div>

              {/* Pendidikan */}
              <div className="mb-2">
                <h2 className="text-xl font-semibold mb-2 bg-gray-500 text-white pl-2">
                  Pendidikan dan Kualifikasi
                </h2>
                <div>
                  <p className="font-semibold">
                    {education?.degree} - {education?.school}
                  </p>
                  <p className="text-sm text-gray-600">
                    {education?.city ? `${education?.city}` : "Jakarta"} |{" "}
                    {education?.startMonth} {education?.startYear} -{" "}
                    {education?.endMonth} {education?.endMonth}
                  </p>
                  <p className="text-sm">
                    Jurusan:{" "}
                    {education?.major
                      ? `${education?.major}`
                      : "IPA / Teknik Mesin"}
                  </p>
                  <p className="text-sm mt-1">
                    {education?.description
                      ? `${education?.description}`
                      : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}
                  </p>
                </div>
              </div>

              {/* Pengalaman Kerja */}
              <div className="mb-2">
                <h2 className="text-xl font-semibold mb-2 bg-gray-500 text-white pl-2">
                  Pengalaman Kerja
                </h2>
                <div>
                  <p className="font-semibold">
                    {experience?.position
                      ? `${experience?.position}`
                      : "Manager"}{" "}
                    -{" "}
                    {experience?.company
                      ? `${experience?.company}`
                      : "PT Jaya Abadi"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {experience?.city}{" "}
                    {`| ${experience?.startMonth} ${experience?.startYear}`}{" "}
                    {`- ${experience?.endMonth} ${experience?.endYear}`}
                  </p>
                  <p className="text-sm mt-1">
                    {experience?.description
                      ? `${experience?.description}`
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                  </p>
                </div>
              </div>

              {/* Social Media */}
              {social ? (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2 bg-gray-500 text-white pl-2">
                    Media Sosial
                  </h2>
                  <ul className="flex gap-4  text-sm space-y-1">
                    <div>
                      <li>LinkedIn: {social.lk}</li>
                      <li>Instagram: {social.ig}</li>
                    </div>
                    <div>
                      <li>GitHub: {social.git}</li>
                      <li>Facebook: {social.fb}</li>
                    </div>
                  </ul>
                </div>
              ) : null}

              {/* Keahlian */}

              <div>
                <h2 className="text-xl font-semibold mb-2 bg-gray-500 text-white pl-2">
                  Keahlian
                </h2>
                <ul className="list-disc pl-5 text-sm">
                  {skill.nama.map((item, index) => (
                    <li key={index}>{item.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Page>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default GeneratePdf;
