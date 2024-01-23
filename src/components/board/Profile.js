import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";

const Profile = ({
  name,
  image,
  title,
  email,
  linkedin,
  year,
  major,
  pronouns,
}) => {
  return (
    <div className="border-2 border-black font-poppins bg-white w-72 h-auto rounded-xl">
      <Image
        src={image}
        alt="Picture of board member"
        className="rounded-xl border-2 border-black mt-3 mr-auto ml-auto w-60 h-58"
      />
      <div className="ml-5">
        <div className="font-bold text-xl mt-3">{name}</div>
        <div className="text-l">{title}</div>
        <div className="flex space-x-2">
          <Link href={email}>
            <MdEmail className="h-8 w-8 text-slate-800" />
          </Link>
          <Link href={linkedin}>
            <GrLinkedinOption className="h-7 w-7 text-slate-800" />
          </Link>
        </div>
        <div className="text-l">
          {year}
          &nbsp;
          {major}
        </div>
        <div className="text-l">Pronouns: {pronouns}</div>
      </div>
      <div className="flex justify-end ">
        <IoMdStar className="text-3xl pr-2 pb-2" />
      </div>
    </div>
  );
};

export default Profile;
