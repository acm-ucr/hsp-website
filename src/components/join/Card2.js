import React from "react";
import {
  IoMdCloseCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";

const Card2 = ({ title, description, icon }) => {
  return (
    <div className="bg-white text-black border border-black rounded-3xl my-5 mx-4">
      <div className="flex items-center text-2xl mx-4 my-2">
        <IoMdCloseCircleOutline className="mx-1" />
        <IoMdRemoveCircleOutline className="mx-1" />
      </div>
      <div className="border border-black"></div>
      <div className="font-montserrat text-3xl font-extrabold leading-10 p-3">
        {title}
      </div>
      <div className="font-sans-arial text-xl font-light leading-9 px-3">
        {description}
      </div>
      <div className="flex justify justify-center">
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Card2;
