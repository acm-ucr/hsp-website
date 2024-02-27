import React from "react";
import Link from "next/link";

const Donate = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <Link
        href="#"
        className="bg-[#639237] font-urbanist text-white text-[60px] font-black underline decoration-2 rounded-[40.5px] w-[364px] h-[81px]px-1.5 hover:no-underline"
      >
        Donate Here
      </Link>
    </div>
  );
};

export default Donate;
