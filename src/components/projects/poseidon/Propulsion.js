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
      <div className="grid grid-cols-2 justify-center gap-10 w-9/12 ">
        <div className="flex flex-col text-center justify-center items-center w-11/12">
          <div className="my-2 text-2xl font-thin text-gray-700 font-montserrat">
            {" "}
            Combustion Devices
          </div>
          <div className="text-xl font-urbanist">
            Completely design, fabricate, and thoroughly test the injector and
            combustion chamber assemblies to produce 650 ibf thrust efficiently
            using atomized Nitrous-Oxide and Ethanol.
          </div>
        </div>
        <div className="flex justify-center">
          <Image alt="" src={image1} />
        </div>
      </div>
      <br />
      <div className="h-0.5 bg-black w-9/12"> </div>
      <br />
      <div className="grid grid-cols-2 justify-center w-9/12 gap-10">
        <div className="flex flex-col text-center justify-center items-center w-11/12">
          <div className="my-2 text-2xl font-thin text-gray-700 font-montserrat">
            {" "}
            Fluid Systems
          </div>
          <div className="text-xl font-urbanist">
            Create the internal plumbing of the flight vehicle to transport
            propellants from the in-flight tanks to the injector with minimal
            pressure drop while taking advantage of the self-pressurizing
            properties of nitrous oxide.
          </div>
        </div>
        <div className="flex justify-center">
          <Image alt="" src={image2} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Propulsion;
