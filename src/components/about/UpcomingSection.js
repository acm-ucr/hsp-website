import React from "react";
import Image from "next/image";
import shootingStar from "@/public/assets/about/shootingStar.svg";
import shootingStar2 from "@/public/assets/about/shootingStar2.svg";
import bar from "@/public/assets/about/bar.svg";
import Button from "@/components/about/Button";

const UpcomingSection = () => {
  return (
    <div className="flex justify-center">
      <Image src={bar} alt="Left Bar" className="" />
      <div class=" flex justify-center items-start w-9/12">
        <Image src={shootingStar} alt="ShootingStar" className="rotate-180" />
        <div className="flex flex-col justify-center items-center text-6xl font-montserrat font-extralight text-center mx-4 mt-14">
          {" "}
          Upcoming Events <Button />
        </div>
        <Image
          src={shootingStar2}
          alt="ShootingStar2"
          className="rotate-180 "
        />
      </div>
      <Image src={bar} alt="Right Bar" className="" />
    </div>
  );
};

export default UpcomingSection;
