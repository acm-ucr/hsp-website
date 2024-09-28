import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Event = ({ month, day, start, title, location, description }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex justify-center drop-shadow-2xl w-full">
      <div className="font-urbanist flex justify-center flex-col bg-gradient-to-r from-[#010101] via-[#010101]  to-[#393B42] text-[#ffffff] rounded-l-2xl w-3/12">
        <div className=" mt-3 text-center md:text-5xl font-black ">{month}</div>
        <div className="text-center md:text-5xl font-black pt-2">{day}</div>
        <div className="text-center md:text-xl font-black py-2">{start}</div>
      </div>
      <div className="bg-white rounded-r-2xl w-9/12 text-[#303030] p-3">
        <div className="text-4xl ml-5 font-black">{title}</div>
        {location && (
          <div className="font-sans ml-5 flex text-left text-xl">
            {location.startsWith("http") ? (
              <Link
                className="flex flex-row items-center text-hsp-orange underline"
                href={location}
              >
                <LuExternalLink className="text-hsp-orange" /> &nbsp;Zoom
              </Link>
            ) : (
              location
            )}
          </div>
        )}
        <div className="font-sans ml-5 mb-2 mt-3 mr-2 text-lg break-all">
          {expand ? description : `${description.slice(0, 250)}...`}
          {description.length > 250 && (
            <div className="flex justify-end">
              <FaChevronDown
                className={`text-hsp-orange ml-2 cursor-pointer transition duration-300 ${
                  expand ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setExpand(!expand)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
