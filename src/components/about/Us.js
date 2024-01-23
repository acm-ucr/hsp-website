import React from "react";
import Image from "next/image";
import image from "@/public/assets/about/aboutUs.svg";
import { GrTopCorner } from "react-icons/gr";
import { GrBottomCorner } from "react-icons/gr";

const Us = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="my-40 max-h-0 translate-y-12 flex flex-col1">
        <GrBottomCorner
          size={65}
          className="origin-top-left translate-x-7 translate-y-5 rotate-90"
        />
        <div className="font-montserrat font-bold text-5xl">ABOUT US</div>
        <GrTopCorner
          size={65}
          className="origin-top-right translate-x-5 translate-y-8 rotate-90"
        />
      </div>
      <div className="grid grid-cols-2 justify-center w-full gap-4">
        <div className="flex flex-col text-center justify-center items-end font-montserrat font-bold ">
          <div className="text-lg w-9/12">
            {" "}
            HSP creates opportunities for its members to collaborate with
            industry professionals and organizations, engage in projects and
            research that &nbsp; are relevant to the field of aerospace
            engineering.
          </div>
          <br />
          <div className="text-lg w-9/12">
            HSP regularly conducts meetings and work sessions that build towards
            competitions.
          </div>
        </div>
        <div className="flex justify-start items-center ">
          <Image alt="" src={image} />
        </div>
      </div>
    </div>
  );
};

export default Us;
