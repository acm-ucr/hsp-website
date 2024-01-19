import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";

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
    <div className="border-2 border-black font-poppins bg-white w-64 h-96 m-5">
      <Image
        src={image}
        alt="Picture of board member"
        className="rounded-full border-2 border-black mt-3 mr-3 ml-3"
      />
      <div className="ml-3">
        <div className="font-bold text-xl mt-3">{name}</div>
        <div className="text-l">{title}</div>
        <div className="flex space-x-2 text-slate-700">
          <MdEmail className="h-8 w-8 " />
          <GrLinkedinOption className="h-7 w-7" />
        </div>
        <div className="text-l">
          {year}

          {major}
        </div>
      </div>
    </div>
  );
};

export default Profile;
