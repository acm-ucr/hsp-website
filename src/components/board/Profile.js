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
    <div className="border-3 border-black bg-white w-72 rounded-xl">
      <Image
        src={image}
        alt="Picture of board member"
        className="mt-3 mr-auto ml-auto rounded-xl border-black border-3 h-[220px] w-[233px]"
      />
      <div className="ml-5">
        <div className="font-bold font-montserrat text-xl mt-3">{name}</div>
        <div className="text-l font-urbanist">{title}</div>
        <div className="flex space-x-2 ">
          <Link href={"mailto:" + email} target="_blank">
            <MdEmail className="h-8 w-8 text-slate-800 hover:opacity-70" />
          </Link>
          <Link href={linkedin} target="_blank">
            <GrLinkedinOption className="h-7 w-7 text-slate-800 hover:opacity-70" />
          </Link>
        </div>
        <div className="text-l font-urbanist">
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
