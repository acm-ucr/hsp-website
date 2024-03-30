import Image from "next/image";
import image1 from "../../../../public/assets/projects/poseidon/avionics1.svg";
import image2 from "../../../../public/assets/projects/poseidon/avionics2.svg";

const Avionics = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center bg-black my-10">
      <div className="my-10 font-montserrat font-extrabold text-xl lg:text-3xl text-white flex flex-col">
        {" "}
        Avionics Team
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-10/12 lg:w-7/12 gap-6">
        <div className="flex flex-col lg:text-right justify-center items-center lg:items-end ">
          <div className="my-2 text-lg lg:text-2xl font-thin text-gray-300 font-montserrat">
            {" "}
            Data Acqusition (DAQ) & Control
          </div>
          <div className="text-base lg:text-xl font-light text-white font-sans lg:leading-9">
            Create and manage a real-time data acquisition system for recording
            and displaying data, facilitating live safety checks for launching
            and aborting sequences. Designed hardware for a server based valve
            system and ignition.
          </div>
        </div>

        <div className="flex lg:justify-start justify-center">
          <Image alt="" src={image1} className="w-8/12 lg:w-fit" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6  w-10/12 lg:w-7/12 ">
        <div className=" justify-center items-start hidden md:block">
          {" "}
          <Image alt="" src={image2} />
        </div>
        <div className="flex flex-col lg:text-left justify-center items-center lg:items-start">
          <div className="my-2 text-lg lg:text-2xl font-thin text-gray-300 font-montserrat">
            Ground Systems & Equipment (GSE)
          </div>
          <div className="text-base lg:text-xl font-light text-white font-sans lg:leading-9">
            Construct ground support equipment, including an engine test stand,
            to facilitate preliminary testing of rocket components and gather
            crucial data, ensuring a successful rocket launch
          </div>
        </div>
        <div className=" justify-center items-start block md:hidden">
          {" "}
          <Image alt="" src={image2} />
        </div>
      </div>
    </div>
  );
};
export default Avionics;
