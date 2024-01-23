import logo from "@/public/assets/FooterLogo.svg";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-black flex w-full pl-6 pb-10 pt-24 pr-28">
      <div className="grid grid-cols-9 text-white justify-between">
        <div className="flex justify-start mr-10 col-span-4 w-full">
          <Image src={logo} />
        </div>
        <div className="font-montserrat flex flex-col space-y-8 min-w-fit text-right pt-7 mb-6 ml-18 col-span-3">
          <div className="text-xl font-semibold">contact us!</div>
          <div className="text-xl font-semibold pb-10">
            Winston Chung Hall, 446 N Campus Dr, Riverside, CA 92507
          </div>
          <div className="text-xl font-semibold">714-749-5576</div>
        </div>
        <div className="bg-white w-1 h-52 flex justify-start mt-7 ml-16"></div>
        <div
          className="grid grid-cols-2 gap-10 space-x-2 text-5xl mt-7 w-5/6 h-5/6"
          style={{ cursor: "pointer" }}
        >
          <Link href="instagram-link">
            <FaInstagram />
          </Link>
          <Link href="discord-link">
            <FaDiscord />
          </Link>
          <Link href="youtube-link">
            <FaYoutube />
          </Link>
          <Link href="slack-link">
            <FaSlack />
          </Link>
          <Link href="email-link">
            <FaEnvelope />
          </Link>
          <Link href="medium-link">
            <FaMediumM />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
