import React from "react";
import logo from "../../public/assets/FooterLogo.svg";
import logo2 from "../../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaDiscord, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 gap-6 text-white bg-black w-full pt-4 pb-2">
      <div className="hidden md:block justify-start">
        <Image src={logo} />
      </div>
      <div className="md:hidden flex justify-center items-center">
        <Image src={logo2} />
      </div>
      <div className="grid lg:grid-cols-3 divide-x-4 divide-white justify-center items-center ">
        <div className="text-sm lg:text-xl font-montserrat h-5/6 grid col-span-2 justify-center items-center mr-4 mb-3">
          <div className="font-semibold flex lg:justify-end">contact us!</div>
          <div className="font-semibold flex lg:justify-end">
            Winston Chung Hall, 446 N Campus Dr, <br /> Riverside, CA 92507
          </div>
          <div className="font-semibold flex lg:justify-end">714-749-5576</div>
        </div>
        <div className="grid grid-cols-2 text-2xl justify-center items-center lg:text-5xl text-white h-full hover:curson-pointer mr-4">
          <div className=" hidden md:flex justify-between flex-col items-center h-3/6">
            <Link
              className="text-white hover:!text-hsp-yellow"
              href="https://www.instagram.com/hspucr/"
            >
              <FaInstagram />
            </Link>
            <Link
              className="text-white hover:!text-hsp-yellow"
              href="https://discord.gg/nYrhvTPbZg"
            >
              <FaDiscord />
            </Link>
          </div>
          <div className="hidden md:flex justify-between flex-col items-center h-3/6">
            <Link
              className="text-white hover:!text-hsp-yellow"
              href="https://www.youtube.com/channel/UCRf1mTeWrkKCJ3I1SxhkxNg"
            >
              <FaYoutube />
            </Link>
            <Link
              className="text-white hover:!text-hsp-yellow"
              href="mailto:highlanderspaceprogram@gmail.com"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:hidden  grid grid-cols-2 text-2xl lg:text-5xl text-white justify-center items-center  hover:curson-pointer mr-4">
        <div className="flex justify-between flex-col items-center h-3/6">
          <Link
            className="text-white "
            href="https://www.instagram.com/hspucr/"
          >
            <FaInstagram />
          </Link>
          <Link className="text-white" href="https://discord.gg/nYrhvTPbZg">
            <FaDiscord />
          </Link>
        </div>
        <div className="flex justify-between flex-col items-center h-3/6">
          <Link
            className="text-white"
            href="https://www.youtube.com/channel/UCRf1mTeWrkKCJ3I1SxhkxNg"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white"
            href="mailto:highlanderspaceprogram@gmail.com"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
