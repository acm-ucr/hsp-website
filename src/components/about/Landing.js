import React from "react";
import Sky from "@/public/assets/about/sky.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="h-screen">
      <Image src={Sky} />
    </div>
  );
};

export default Landing;
