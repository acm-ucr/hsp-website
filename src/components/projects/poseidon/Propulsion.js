import Image from "next/image";
import image1 from "../../../../public/assets/projects/poseidon/propulsion1.webp";
import image2 from "../../../../public/assets/projects/poseidon/propulsion2.webp";

const Propulsion = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="my-10 font-montserrat font-extrabold text-xl lg:text-3xl flex flex-col1">
        {" "}
        Propulsion Team
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 lg:w-8/12 ">
        <div className="flex flex-col justify-center items-center lg:w-11/12 ">
          <div className="my-2 text-lg lg:text-2xl font-thin text-gray-700 font-montserrat">
            {" "}
            Combustion Devices
          </div>
          <div className="text-base text-center lg:text-xl font-urbanist w-10/12 lg:w-full">
            Completely design, fabricate, and thoroughly test the injector and
            combustion chamber assemblies to produce 650 ibf thrust efficiently
            using atomized Nitrous-Oxide and Ethanol.
          </div>
        </div>
        <div className="flex justify-center ">
          <Image alt="" src={image1} />
        </div>
      </div>
      <br />
      <div className="h-0.5 bg-black w-10/12 lg:w-9/12"> </div>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:w-8/12 gap-10">
        <div className="flex flex-col text-center justify-center items-center lg:w-11/12">
          <div className="my-2 text-lg lg:text-2xl font-thin text-gray-700 font-montserrat">
            {" "}
            Fluid Systems
          </div>
          <div className="text-base lg:text-xl font-urbanist w-10/12 lg:w-full">
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
