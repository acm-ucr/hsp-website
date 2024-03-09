import React from "react";
import texts from "@/data/Poseidon/Timeline";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex text-left w-9/12 text-3xl font-extrabold font-montserrat pb-4">
        Timeline
      </div>
      {texts.map((event, index) => (
        <div key={index} className="flex w-9/12 items-start ">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex flex-col items-center">
                <div className=" bg-blue-500 rounded-full w-10 h-10"></div>

                {index !== texts.length - 1 && (
                  <div className="w-1 bg-black h-20"></div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 font-sans ">
            <div className="text-2xl flex justify-center items-start ">
              {event.data}
            </div>
            <div className="text-xl text-left  flex justify-center items-center">
              {event.para}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
