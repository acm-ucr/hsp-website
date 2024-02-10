import React from "react";
import texts from "@/data/Poseidon/Timeline";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-items-start w-8/12 text-4xl font-bold pb-4">
        Timeline
      </div>
      {texts.map((event, index) => (
        <div key={index} className="flex w-2/3 items-start ">
          <div className="flex items-center justify-center">
            <div>
              {/* Container for the circle and the line */}
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div className=" bg-blue-500 rounded-full w-16 h-16"></div>

                {/* Vertical line below the circle */}
                {index !== texts.length - 1 && (
                  <div className="w-1 bg-black h-32"></div>
                )}
              </div>
            </div>
          </div>
          {/* Texts */}
          <div className="grid grid-cols-2 gap-0.5">
            <div className="text-4xl place-self-center">{event.data}</div>
            <div className="text-2xl text-left">{event.para}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
