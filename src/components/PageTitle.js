import React from "react";
import Image from "next/image";
import starBackground from "@/public/assets/starBackground.svg";

const PageTitle = ({ PageTitle }) => {
  return (
    <div className="page-title-container">
      <div className="relative page-title">
        <Image src={starBackground} alt="Star Background" className="w-full" />
        <div class="font-mont absolute top-12 py-3.5 inset-x-0 text-white text-7xl font-bold text-center">
          {PageTitle}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
