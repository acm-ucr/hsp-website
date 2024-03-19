import React from "react";

const Event = ({ month, day, start, title, location, description }) => {
  return (
    <div className="flex justify-center drop-shadow-2xl w-full">
      <div className="font-urbanist flex justify-center flex-col bg-gradient-to-r from-[#010101] via-[#010101]  to-[#393B42] text-[#ffffff] rounded-l-2xl w-3/12">
        <div className=" mt-3 text-center md:text-5xl font-black ">{month}</div>
        <div className="text-center md:text-4xl font-black pt-2">{day}</div>
        <div className="text-center md:text-xl font-black py-2">{start}</div>
      </div>
      <div className="bg-[#ffffff] rounded-r-2xl w-9/12 text-[#303030]">
        <div className="text-4xl ml-5 font-black">{title}</div>
        <div className="font-sans ml-5 flex text-left text-xl">{location}</div>
        <div className="font-sans ml-5 mb-2 mt-3 mr-2 text-lg">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
