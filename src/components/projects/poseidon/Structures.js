import React from "react";
import Image from "next/image";
import image1 from "../../../../public/assets/projects/poseidon/structures1.png";
import image2 from "../../../../public/assets/projects/poseidon/structures2.png";
const Structures = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center  my-10">
      {/* <div className="my-10 font-montserrat font-extrabold text-3xl text-white flex flex-col">
    {" "}
    Structures Team
  </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-10/12 lg:w-7/12">
        <div className=" justify-center hidden md:block">
          <Image alt="" src={image1} className="" />
        </div>
        <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start ">
          <div className="font-montserrat font-extrabold text-xl lg:text-2xl  flex flex-col">
            {" "}
            Structures Team
          </div>
          <div className="my-2 text-lg lg:text-2xl font-thin  font-montserrat">
            {" "}
            Payload & Recovery
          </div>
          <div className="text-base lg:text-xl lg:text-left font-light  font-sans leading-8 lg:leading-9">
            Payload aims to shield sensitive biological experiments and
            instruments from intense rocket vibrations and heat produced during
            flight. The recovery team ensures the safe return of Poseidon
            through a two-stage parachute system.
          </div>
        </div>
        <div className=" flex justify-center md:hidden">
          <Image alt="" src={image1} className="lg:w-full w-6/12" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-center w-10/12 lg:w-7/12">
        <div className="flex flex-col lg:text-right lg:justify-end lg:items-end">
          <div className="my-2 text-lg lg:text-2xl font-thin  font-montserrat">
            Aerostructures
          </div>
          <div className="text-base lg:text-xl font-light  font-sans leading-8 lg:leading-9">
            Design, simulate, and rigorously test the aero-structures of our
            Poseidon rocket to guarantee flight stability and structural
            integrity.
          </div>
        </div>
        <div className="flex justify-center items-start">
          {" "}
          <Image alt="" src={image2} className="lg:w-fit w-8/12" />
        </div>
      </div>
    </div>
  );
};

export default Structures;
