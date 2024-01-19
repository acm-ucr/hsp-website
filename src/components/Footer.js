import logo from "@/public/assets/FooterLogo.svg";
import Image from "next/image";

import {
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaSlack,
  FaEnvelope,
  FaMediumM,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black flex w-full pl-6 pb-14 pt-28">
      <div className="grid grid-cols-11 text-white justify-between w-full ">
        <div className="flex justify-start col-span-5 mr-10">
          <Image src={logo} />
        </div>
        <div className="font-montserrat flex flex-col space-y-8 min-w-fit text-right pt-7 mb-6 col-span-3">
          <div className="text-xl font-semibold">contact us!</div>
          <div className="text-xl font-semibold pb-10">
            Winston Chung Hall, 446 N Campus Dr, Riverside, CA 92507
          </div>
          <div className="text-xl font-semibold">714-749-5576</div>
        </div>
        <div className="bg-white w-1 h-52 flex justify-start ml-16 mt-7"></div>
        <div className="grid grid-cols-2 gap-10 space-x-2 text-5xl mt-7 cols-span-2">
          <FaInstagram />
          <FaDiscord />
          <FaYoutube />
          <FaSlack />
          <FaEnvelope />
          <FaMediumM />
        </div>
      </div>
    </div>
  );
};
export default Footer;
