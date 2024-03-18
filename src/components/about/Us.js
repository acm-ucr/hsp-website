import React from "react";
import Image from "next/image";
import image from "@/public/assets/about/aboutUs.svg";
import { GrTopCorner } from "react-icons/gr";
import { GrBottomCorner } from "react-icons/gr";

const Us = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center ">
      <div className="mb-40 mt-20 max-h-0 translate-y-12 flex flex-col1">
        <GrBottomCorner
          size={60}
          // md:size={65}
          // lg:size={65}
          className="origin-top-left translate-x-12 translate-y-3 rotate-90"
        />
        <div className="font-montserrat font-bold text-3xl md:text-4xl">
          ABOUT US
        </div>
        <GrTopCorner
          size={60}
          className="origin-top-right translate-x-3 translate-y-8 rotate-90"
        />
      </div>
      <div className="grid md:grid-cols-2 justify-center gap-4 w-full">
        <div className="flex flex-col text-center justify-center items-center lg:items-end font-montserrat font-bold">
          <div className="md:text-lg sm:text-md lg:7/12 md:w-9/12 w-10/12">
            {" "}
            HSP creates opportunities for its members to collaborate with
            industry professionals and organizations, engage in projects and
            research that are relevant to the field of aerospace engineering.
          </div>
          <br />
          <div className="md:text-lg sm:text-md lg:7/12 md:w-9/12 w-10/12">
            HSP regularly conducts meetings and work sessions that build towards
            competitions.
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center">
          {" "}
          <Image className="w-11/12 lg:w-10/12" alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

export default Us;
