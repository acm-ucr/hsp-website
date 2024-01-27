import React from "react";
// import { LuExternalLink } from "react-icons/lu";
// import Link from "next/link";
// import reactHtmlParser from "html-react-parser";

const Event = ({ month, day, start, title, location, description }) => {
  month = "FEB";
  day = "29";
  start = "7:00PM";
  title = "Event Name";
  location = "WCH 205,206";
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="flex justify-center h-[168.81px] my-[2rem] drop-shadow-2xl">
      <div className="font-urbanist bg-gradient-to-r from-[#000000] to-[#575966] text-[#ffffff] rounded-l-[18px] w-[134.48px]">
        <div className="text-[42px] mt-3 text-center md:text-5xl font-black ">
          {month}
        </div>
        <div className="text-[42px] text-center md:text-5xl font-black pt-2">
          {day}
        </div>
        <div className="text-[21px] text-center md:text-2xl font-black py-2">
          {start}
        </div>
      </div>
      <div className="bg-[#ffffff] rounded-r-[18px] w-[461.31px] text-[#303030]">
        <div className="leading-tight text-[34px] ml-5 font-black">{title}</div>
        <div className="leading-tight font-arial ml-5 flex text-left text-[21px]">
          {location}
        </div>
        <div className="leading-snug font-arial ml-5 mb-2 mt-3 mr-2 text-[18px]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Event;
