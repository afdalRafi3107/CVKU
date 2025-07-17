import {
  DiApple,
  DiDropbox,
  DiGithubBadge,
  DiWindows,
  DiUbuntu,
  DiIe,
} from "react-icons/di";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import Footer from "@/app/routes/footer";

export function LandingPage() {
  const Navigate = useNavigate();

  const onClickBuildMyResume = () => {
    Navigate("/cv-builder/personal-details");
  };

  return (
    <>
      <section className="flex flex-col gap-30 mb-30">
        <div>
          <div className="text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-green-500 to-90% bg-clip-text text-transparent">
            <p className="text-5xl font-bold mt-10 mb-2">
              A Great CV Is Just the Beginning
            </p>
            <img
              src="./logo/hero.png"
              alt=""
              className="m-auto w-3xl text-shadow-lg dark:text-shadow-none hover:min-w-200 duration-1000"
            />
          </div>
        </div>
        <div className="text-center bg-amber-200 m-auto p-0">
          <img
            src="/images/template.jpg"
            alt=""
            className="bg-green-300 m-0 p-0 w-2xl shadow-xl/30"
          />
        </div>

        {/*   1 */}
        <div className="flex flex-col gap-5 text-center">
          <p className="text-md text-green-500">How it works</p>
          <p className="text-4xl font-bold">3 Steps. 5 Minutes.</p>
          <div className=" flex items-center gap-5 m-auto w-fit">
            {/* //langkah langkah */}
            <div className="flex gap-2 items-center ">
              <div className="w-10 h-10 text-green-500 rounded-full flex items-center justify-center border-2 border-green-500">
                <p className="text-md">1</p>
              </div>
              <div className="text-justify">
                <p className="font-bold">Import from LinkedIn</p>
                <p className="text-sm text-gray-400">Or start from scratch</p>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="w-10 h-10 text-blue-500 rounded-full flex items-center justify-center border-2 border-blue-500">
                <p className="text-md">2</p>
              </div>
              <div className="text-justify">
                <p className="font-bold">Choose a template</p>
                <p className="text-sm text-gray-400">
                  12 Hiring manager approved templates
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="w-10 h-10 text-red-500 rounded-full flex items-center justify-center border-2 border-red-500">
                <p className="text-md">3</p>
              </div>
              <div className="text-justify">
                <p className="font-bold">Share as web or PDF</p>
                <p className="text-sm text-gray-400">
                  A resume for every application
                </p>
              </div>
            </div>
          </div>
          <Button
            className="w-45 h-10 m-auto bg-green-500 text-md transition active:scale-95 hover:bg-green-400"
            onClick={onClickBuildMyResume}
          >
            Build My Resume
          </Button>
        </div>
        {/*   1 */}
        <div className="flex flex-col gap-5 text-center">
          <p className="text-md text-green-500">Trusted Templates</p>
          <p className="text-4xl font-bold">Hiring Manager Approved</p>
          <p className="m-auto text-xl text-gray-400 w-150">
            We work with hiring managers to design and review our templates so
            you can apply with confidence.
          </p>
          <div className=" flex items-center gap-5 text-9xl m-auto w-200 h-50">
            {/* //langkah langkah */}
            <DiApple />
            <DiDropbox />
            <DiGithubBadge />
            <DiWindows />
            <DiUbuntu />
            <DiIe />
            <BsFacebook />
            <BsInstagram />
          </div>
          <Button
            className="w-45 h-10 m-auto bg-green-500 text-md transition active:scale-95 hover:bg-green-400"
            onClick={onClickBuildMyResume}
          >
            Build My Resume
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
