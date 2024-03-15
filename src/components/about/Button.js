import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <Link
      href="/events"
      className="flex flex-col justify-center items-center bg-hsp-yellow text-white text-2xl font-bold font-montserrat rounded-full w-3/12 py-2 my-4 hover:scale-105 hover:cursor-pointer"
    >
      See More
    </Link>
  );
};

export default Button;
