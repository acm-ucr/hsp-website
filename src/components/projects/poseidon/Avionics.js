import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/projects/poseidon/avionics1.svg";
import image2 from "@/public/assets/projects/poseidon/avionics2.svg";

const Avionics = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center bg-black my-10">
      <div className="my-10 font-montserrat font-extrabold text-3xl text-white flex flex-col">
        {" "}
        Avionics Team
      </div>

      <div className="grid grid-cols-2 justify-center items-center w-7/12 gap-6">
        <div className="flex flex-col text-right justify-center items-end ">
          <div className="my-2 text-2xl font-thin text-gray-300 font-montserrat">
            {" "}
            Data Acqusition (DAQ) & Control
          </div>
          <div className="text-xl font-light text-white font-sans leading-9">
            Create and manage a real-time data acquisition system for recording
            and displaying data, facilitating live safety checks for launching
            and aborting sequences. Designed hardware for a server based valve
            system and ignition.
          </div>
        </div>

        <div className="flex justify-start">
          <Image alt="" src={image1} className="" />
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center items-center gap-6  w-7/12 ">
        <div className="flex justify-center items-start">
          {" "}
          <Image alt="" src={image2} />
        </div>
        <div className="flex flex-col text-left justify-center items-start">
          <div className="my-2 text-2xl font-thin text-gray-300 font-montserrat">
            Ground Systems & Equipment (GSE)
          </div>
          <div className="text-xl font-light text-white font-sans leading-9">
            Construct ground support equipment, including an engine test stand,
            to facilitate preliminary testing of rocket components and gather
            crucial data, ensuring a successful rocket launch
          </div>
        </div>
      </div>
    </div>
  );
};
export default Avionics;
