import texts from "@/data/Poseidon/Timeline";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex lg:justify-start justify-center lg:w-8/12 text-xl lg:text-3xl font-extrabold font-montserrat pb-4">
        Timeline
      </div>
      {texts.map((event, index) => (
        <div key={index} className="flex w-11/12 lg:w-8/12 items-start ">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex flex-col items-center">
                <div className=" bg-blue-500 rounded-full w-10 h-10"></div>

                {index !== texts.length - 1 && (
                  <div className="bg-black relative h-20 w-1"></div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 font-sans ">
            <div className="text-lg lg:text-2xl flex justify-center items-start ">
              {event.data}
            </div>
            <div className="text-sm lg:text-xl text-left flex justify-center items-center">
              {event.para}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
