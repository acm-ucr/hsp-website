import Link from "next/link";

import { IoIosCloseCircle } from "react-icons/io";
import { MdRemoveCircle } from "react-icons/md";
import { MdExpandCircleDown } from "react-icons/md";

const Card = ({ title, description, icon, discord = false }) => {
  return (
    <div className="bg-white text-black border border-black rounded-3xl p-3">
      <div className="flex items-center text-2xl my-2">
        <IoIosCloseCircle className="mx-1" />
        <MdRemoveCircle className="mx-1" />
        <MdExpandCircleDown className="mx-1" />
      </div>
      <div className="border border-black"></div>
      <div className="font-montserrat text-xl lg:text-3xl text-center font-extrabold leading-8 lg:leading-8 p-3">
        {title}
      </div>
      <div className="font-sans-arial text-center text-base lg:text-xl font-light leading-8 lg:leading-8 px-3">
        {description}
      </div>

      {discord && (
        <Link
          href="https://discord.gg/nYrhvTPbZg"
          className="flex justify-center"
        >
          {icon}
        </Link>
      )}
      {!discord && <div className="flex justify-center">{icon}</div>}
    </div>
  );
};

export default Card;
