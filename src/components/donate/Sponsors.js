import React from "react";
import Image from "next/image";

const Sponsors = ({logos}) => {
  return (
  <div className = "my-12 text-center flex flex-col justify-center items-center h-full">
    <div className = "mb-2 text-6xl font-black font-urbanist">
    <p>Sponsors</p>
    </div>
    <div className = "justify-center w-10/12">
    <p>We are excited to share our progress and our future goals. Thank you for your support.</p>
    </div>
      {logos.map((img, index) => (
        <div
          key = {index}
          className = "ml-12"
        >
          <Image src={img} alt=""/>
        </div>
      ))}
  </div>
  );
};
export default Sponsors;
