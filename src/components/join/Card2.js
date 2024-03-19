import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdRemoveCircle } from "react-icons/md";
import { MdExpandCircleDown } from "react-icons/md";
const Card2 = ({ title, description, icon }) => {
  return (
    <div className="bg-white text-black border border-black rounded-3xl my-5 mx-4">
      <div className="flex items-center text-2xl mx-4 my-2">
        <IoIosCloseCircle className="mx-1" />
        <MdRemoveCircle className="mx-1" />
        <MdExpandCircleDown className="mx-1" />
      </div>
      <div className="border border-black"></div>
      <div className="font-montserrat text-xl lg:text-3xl text-center font-extrabold leading-9 lg:leading-10 p-3">
        {title}
      </div>
      <div className="font-sans-arial text-center text-base lg:text-xl font-light leading-8 lg:leading-9 px-3">
        {description}
      </div>
      <div className="flex justify-center">
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Card2;
