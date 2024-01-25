import React from "react";
import {
  IoMdCloseCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
// import { MdGroups } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white text-black w-96 h-96 border border-black rounded-3xl">
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
      <div className="flex justify justify-center text-6xl pt-3">
        <FaDiscord />
      </div>
    </div>
  );
};

export default Card;
