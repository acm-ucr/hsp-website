import React from "react";
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
    <div className="grid grid-cols-2 gap-8 text-white bg-black w-full py-4">
      <div className="flex justify-start ">
        <Image src={logo} />
      </div>
      <div className="grid grid-cols-3 divide-x-4 divide-white justify-center items-center ">
        <div className="sm:text-xs md:text-sm lg:text-xl font-montserrat h-5/6 grid col-span-2 justify-center items-center sm:mr-4">
          <div className="font-semibold flex justify-end">contact us!</div>
          <div className="font-semibold flex justify-end">
            Winston Chung Hall, 446 N Campus Dr, <br /> Riverside, CA 92507
          </div>
          <div className="font-semibold flex justify-end">714-749-5576</div>
        </div>
        <div className="grid grid-cols-2 sm:text-xl md:text-3xl lg:text-5xl text-white h-5/6 hover:curson-pointer ">
          <div className="flex justify-between flex-col items-center sm:px-8">
            <Link
              className="text-white "
              href="https://github.com/acm-ucr/hsp-website/pull/16/files"
            >
              <FaInstagram />
            </Link>
            <Link className="text-white" href="discord-link">
              <FaDiscord />
            </Link>
            <Link className="text-white" href="youtube-link">
              <FaYoutube />
            </Link>
          </div>
          <div className="flex justify-between flex-col items-start">
            <Link className="text-white" href="slack-link">
              <FaSlack />
            </Link>
            <Link className="text-white" href="email-link">
              <FaEnvelope />
            </Link>
            <Link className="text-white" href="medium-link">
              <FaMediumM />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
