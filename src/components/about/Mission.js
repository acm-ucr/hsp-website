import React from "react";
import Image from "next/image";

const Mission = ({ title, img, texts }) => {
  return (
    <div className="my-12">
      <div className="font-montserrat text-white text-center text-2xl font-black mb-10">
        {title}
      </div>

      <div className="ml-16">
        <Image src={img} alt="hsp building and testing rockets" />
      </div>

      {texts.map((text, index) => (
        <div
          key={index}
          className="font-montserrat text-white text-center text-lg font-black mt-8 mx-16"
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Mission;
