import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import Footer from "../footer";

function Templates() {
  const Navigate = useNavigate();

  const onClickBuildMyResume = () => {
    Navigate("/cv-builder/personal-details");
  };
  return (
    <>
      <section className=" flex flex-col gap-10 mt-10  text-center">
        <div className="flex flex-col gap-3 w-2xl m-auto">
          <h1 className=" text-4xl font-bold">Resume Templates</h1>
          <p className=" font-semibold text-gray-500">
            Professionally designed resume templates to capture the attention of
            recruiters and HR managers. Trusted by over 100,000 job seekers
            worldwide.
          </p>
        </div>
        <div className="flex gap-5 m-auto w-fit ">
          <Card className="bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-2xl w-5xl overflow-hidden">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* LEFT: TEXT SECTION */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold leading-tight">
                  Minimalist, clean, and professional.
                </h2>
                <p className="text-white/90">
                  This is our most popular resume template. Recruiters
                  appreciate the single-column layout with ample white space
                  because it’s easy to scan and helps them quickly identify
                  relevant information.
                </p>
                <p className="text-white/90">
                  Customize this single-column resume format to create either a
                  chronological or functional resume, depending on your years of
                  experience.
                </p>

                {/* CTA BUTTONS */}
                <div className="sm:flex-row sm:items-center pt-4">
                  <Button
                    className="bg-white text-green-500 font-semibold hover:bg-gray-100 cursor-pointer"
                    onClick={onClickBuildMyResume}
                  >
                    Start with this template
                  </Button>
                </div>
              </div>

              {/* RIGHT: IMAGE SECTION */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/images/template1.png"
                  alt="Resume Preview"
                  className="max-h-[480px] w-auto rounded-md drop-shadow-xl object-contain"
                />
              </div>
            </CardContent>
          </Card>
          {/* <NavLink to={""}>
            <Card className="w-sm h-full">
              <CardContent>
                <img src="" alt="" />
                <p className="text-gray-500 mt-[50%] font-bold text-2xl">
                  Comming soon..
                </p>
              </CardContent>
            </Card>
          </NavLink> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Templates;
