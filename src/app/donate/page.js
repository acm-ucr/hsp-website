import React from "react";
import Donate from "@/components/donate/Donate";
import Description from "@/components/donate/Descriptions";
import texts from "@/data/Donate";
import Image from "next/image";
import Image1 from "@/public/assets/donate/donate1.svg";
import Image2 from "@/public/assets/donate/donate2.svg";

const page = () => {
  const first = texts[0];
  const last = texts[texts.length - 1];
  const newTexts = texts.slice(1, texts.length - 1);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className=" w-8/12">
        <div className="grid grid-cols-3 my-8">
          <div className="flex justify-start">
            <Image src={Image1} alt="building rocket" />
          </div>

          <div className=" justify-start items-center grid col-span-2">
            <Description key={0} title={first.heading} texts={first.para} />
          </div>
        </div>

        <div>
          {newTexts.map((paragraph, index) => (
            <Description
              key={index}
              title={paragraph.heading}
              texts={paragraph.para}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 ">
          <div className=" grid col-span-2">
            <Description key={0} title={last.heading} texts={last.para} />
          </div>
          <div className="flex justify-center items-center">
            <Image src={Image2} alt="college ranking" />
          </div>
        </div>
      </div>

      <Donate />
    </div>
  );
};

export default page;
