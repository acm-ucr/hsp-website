import React from "react";
import Image from "next/image";
import shootingStar from "@/public/assets/about/shootingStar.svg";
import shootingStar2 from "@/public/assets/about/shootingStar2.svg";
import bar from "@/public/assets/about/bar.svg";

const UpcomingSection = () => {
  return (
    <div>
      <div class="absolute flex flex-row justify-between items-center right-80">
        <Image
          src={shootingStar}
          alt="ShootingStar"
          className="rotate-180 scale-95 top-0 left-3"
        />
        <h2 className="text-5xl font-montserrat font-extralight text-center">
          {" "}
          Upcoming Events{" "}
        </h2>
        <Image
          src={shootingStar2}
          alt="ShootingStar2"
          className="rotate-180 scale-95 top-0 right-3"
        />
      </div>
      <div class="flex flex-row justify-between">
        <Image src={bar} alt="Left Bar" className="mx-24 top-0 left-5 w-30" />
        <Image src={bar} alt="Right Bar" className="mx-24 top-0 right-5 w-30" />
      </div>
    </div>
  );
};

export default UpcomingSection;
