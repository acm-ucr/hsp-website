import React from "react";
import Image from "next/image";

const Mission = (props) => {
  return (
    <div className="my-12">
      <div className="text-white text-center text-2xl font-black mb-10">
        {props.title}
      </div>

      <div className="ml-16">
        <Image src={props.img} alt="hsp building and testing rockets" />
      </div>

      <div className="text-white text-center text-lg font-black mt-8 mx-16">
        {props.text}
      </div>

      <div className="text-white text-center text-lg font-black mt-4 mx-16">
        {props.para}
      </div>
    </div>
  );
};

export default Mission;
