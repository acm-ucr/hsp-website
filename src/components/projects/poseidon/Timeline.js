import React from "react";
import texts from "@/data/Poseidon/Timeline";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-3">
      <div className="flex text-left w-9/12 text-3xl font-extrabold font-montserrat pb-4">
        Timeline
      </div>
      <div></div>
      {texts.map((event, index) => (
        <div key={index} className="flex w-9/12 items-start ">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex flex-col items-center">
                <div className=" bg-blue-500 rounded-full w-10 h-10 -mt-8"></div>

                {index !== texts.length - 1 && (
                  <div className="w-1 bg-black sm:h-13 h-96"></div>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 font-sans gap-3 -mt-10 ">
            <div className="text-2xl flex justify-center items-start flex-col pl-4">
              {event.data}

              <span className="block md:hidden mt-4">{event.para}</span>
            </div>
            <div className="hidden md:block text-xl">{event.para}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
