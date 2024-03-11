import React from "react";
import Sky from "@/public/assets/about/sky.png";
import Image from "next/image";
import comets from "@/public/assets/about/comets.svg";
import { FaChevronDown } from "react-icons/fa";
const Landing = () => {
  return (
    <div className="h-screen w-screen bg-transparent">
      <Image src={Sky} alt="sky" className="bg-black top-0.5 absolute" />
      <div className="w-screen h-96 bg-white flex justify-center items-center mt-10 relative">
        <Image src={comets} className="" />
        <div classname="flex flex-col items-center ">
          <div className="text-3xl text-black font-extralight font-montserrat my-3">
            Welcome to:
          </div>
          <div className="text-5xl text-black font-extrabold text-center font-montserrat">
            HIGHLANDER SPACE
            <br />
            PROGRAM
          </div>
          <div className="text-3xl text-black font-extralight font-montserrat my-3 text-center">
            Aerospace Engineering at UCR
          </div>
        </div>
        <Image src={comets} className="rotate-90" />
      </div>
      <div className=" absolute flex justify-center items-center w-screen mt-32 flex-col">
        <div className="text-center w-4/12 font-montserrat text-xl font-black text-white">
          promoting and advancing the study and practice of aerospace
          engineering by providing an outlet for members to explore, develop and
          enhance their technical skills.
        </div>
        <FaChevronDown className=" mt-10 text-5xl text-white" />
      </div>
    </div>
  );
};

export default Landing;
