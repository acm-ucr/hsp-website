import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/projects/poseidon/combust.svg";
import image2 from "@/public/assets/projects/poseidon/fluid.svg";

const Propulsion = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="my-10 font-montserrat font-extrabold text-3xl flex flex-col1">
        {" "}
        Propulsion Team
      </div>
      <div className="grid grid-cols-2 justify-center w-full gap-20">
        <div className="flex flex-col text-center justify-center items-end">
          <div className="my-2 text-2xl w-7/12 font-thin text-gray-700 font-montserrat">
            {" "}
            Combustion Devices
          </div>
          <div className="text-xl font-light tracking-wide leading-relaxed w-7/12">
            Completely design, fabricate, and thoroughly test the injector and
            combustion chamber assemblies to produce 650 ibf thrust efficiently
            using atomized Nitrous-Oxide and Ethanol.
          </div>
        </div>
        <div className="flex justify-start translate-x-8">
          <Image alt="" src={image1} />
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 justify-center w-full gap-20">
        <div className="flex flex-col text-center justify-center items-end">
          <div className="my-2 text-2xl w-7/12 font-thin text-gray-700 font-montserrat">
            {" "}
            Fluid Systems
          </div>
          <div className="text-xl font-light tracking-wide leading-relaxed w-7/12">
            Create the internal plumbing of the flight vehicle to transport
            propellants from the in-flight tanks to the injector with minimal
            pressure drop while taking advantage of the self-pressurizing
            properties of nitrous oxide.
          </div>
        </div>
        <div className="flex justify-start translate-x-8">
          <Image alt="" src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Propulsion;
