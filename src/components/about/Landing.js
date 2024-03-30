import Sky from "../../../public/assets/about/sky.webp";
import Image from "next/image";
import comets from "../../../public/assets/about/comets.svg";
import { FaChevronDown } from "react-icons/fa";
const Landing = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Image
        src={Sky}
        alt="sky"
        className="bg-black top-0.5 absolute z-0 hidden md:block"
      />
      <div className="w-screen h-1/2 bg-white flex justify-center items-center mt-10 relative">
        <Image src={comets} className="hidden md:block" />
        <div className="flex flex-col items-center">
          <div className="text-3xl text-black font-extralight flex lg:justify-start justify-center font-montserrat my-3">
            Welcome to:
          </div>
          <div className="text-4xl lg:text-5xl text-black font-extrabold text-center font-montserrat">
            HIGHLANDER SPACE
            <br />
            PROGRAM
          </div>
          <div className="text-xl lg:text-3xl text-black font-extralight font-montserrat my-3 text-center">
            Aerospace Engineering at UCR
          </div>
        </div>
        <Image src={comets} className="rotate-90 hidden md:block" />
      </div>
      <div className="flex justify-center items-center w-screen h-1/2 flex-col">
        <div className="text-center w-11/12 lg:w-4/12 font-montserrat text-base lg:text-xl font-semibold text-white z-20">
          promoting and advancing the study and practice of aerospace
          engineering by providing an outlet for members to explore, develop and
          enhance their technical skills.
        </div>
        <FaChevronDown className="mt-10 text-5xl text-white z-20" />
      </div>
    </div>
  );
};

export default Landing;
