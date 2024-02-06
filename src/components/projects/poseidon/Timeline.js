// import React from "react";
// import texts from "@/data/Poseidon/Timeline";
// const Timeline = () => {
//   return (
//     <div className="flex flex-col items-center py-8 bg-red-300 relative">
//       {texts.map((blah, index) => (
//         <div
//           key={index}
//           className="bg-green-100 flex justify-center w-2/3 h-auto items-center p-4"
//         >
//           <div className="bg-violet-200 ">
//             <div className="rounded-full w-8 h-8 bg-blue-500"> </div>
//             <div className="w-1 text-black bg-black h-32 ml-3.5"></div>
//           </div>
//           <p className="px-16">{blah.data}</p>
//           <p className="text-wrap">{blah.para}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;

import React from "react";
import texts from "@/data/Poseidon/Timeline";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-red-300">
      {texts.map((event, index) => (
        <div key={index} className="flex w-2/3 items-center my-4 bg-yellow-400">
          <div className=" bg-green-400">
            <div>
              {/* Circle */}
              <div className="z-10 bg-blue-500 rounded-full w-8 h-8"></div>

              {/* Vertical line below the circle */}
              {index !== texts.length - 1 && (
                <div className="w-1 bg-black h-32 text-center"></div>
              )}
            </div>
          </div>
          {/* Texts */}

          <h1 className="px-20 text-xl text-nowrap">{event.data}</h1>
          <p className="text-xl">{event.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
