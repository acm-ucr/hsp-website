import React from "react";
import Sky from "@/public/assets/about/sky.png";
import Image from "next/image";
import rocket from "@/public/assets/about/rocket.svg";
import comets from "@/public/assets/about/comets.svg";
import { FaChevronDown } from "react-icons/fa";
const Landing = () => {
  return (
    <div className="h-screen w-screen bg-black ">
      <Image src={Sky} alt="sky" className="bg-transparent absolute" />
      <Image src={rocket} className="absolute right-0 z-0" />
      <div
        className="w-10/12 h-1/2 bg-white justify-start flex items-center"
        style={{
          clipPath: "polygon(0 0, 100% -20%, 70% 100%, 0% 100%)",
        }}
      >
        <Image src={comets} className="" />
        <div classname="flex flex-col ">
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
      </div>
      <div className=" absolute flex justify-center items-center w-5/12 left-60 mt-20 flex-col">
        <div className="text-center w-9/12 font-montserrat text-xl font-black text-white">
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
