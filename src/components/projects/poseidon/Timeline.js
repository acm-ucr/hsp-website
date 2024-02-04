import React from "react";
import texts from "@/data/Poseidon/Timeline";
const Timeline = () => {
  return (
    <div className="bg-red-400">
      {texts.map((blah, index) => (
        <div
          key={index}
          className="bg-green-100 flex justify-center mx-72 h-48"
        >
          <div className="bg-red-200 ">
            <div className="rounded-full w-8 h-8 bg-blue-500"> </div>
            <div className="w-1 text-black bg-black h-12 ml-3.5"></div>
          </div>
          <p className="px-16">{blah.data}</p>
          <p>{blah.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
