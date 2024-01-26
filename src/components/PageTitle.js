import React from "react";
import Image from "next/image";
import starBackground from "@/public/assets/starBackground.svg";
import earth from "@/public/assets/earth.svg";

// <div class="h-20 g-gradient-to-t from-blue-500 to-purple-500"></div>
// <div class=" h-20 bg-gradient-to-t from-white to-purple-500"></div>

const PageTitle = ({ PageTitle }) => {
  return (
    <div className="page-title-container">
      <div className="relative page-title">
        <Image src={starBackground} alt="Star Background" className=" w-full" />
        <Image
          src={earth}
          alt="earth"
          className="absolute top-12 -right-7 h-75 scale-90 w-96flex-shrink-0"
        />
        <div class="font-montserrat absolute top-28 inset-x-0 text-white text-5xl font-bold text-center">
          {PageTitle}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
