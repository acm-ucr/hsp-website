import React from "react";
import Description from "@/components/projects/poseidon/Description";
import texts from "@/data/Poseidon/Poseidon";
import Image from "next/image";
import Image1 from "@/public/assets/projects/poseidon/scotty.svg";
import Image2 from "@/public/assets/projects/poseidon/far.svg";
import Image3 from "@/public/assets/projects/poseidon/rocket.svg";
import PageTitle from "@/components/PageTitle";
import Timeline from "@/components/projects/poseidon/Timeline";

const page = () => {
  const first = texts[0];
  const last = texts[texts.length - 1];

  return (
    <div className="flex justify-center flex-col items-center font-sans">
      <PageTitle title="POSEIDON" />
      <div className="w-7/12">
        <div className="grid grid-cols-3 my-9 gap-5">
          <div className="grid col-span-2">
            <Description key={0} title={first.heading} texts={first.para} />
          </div>
          <Image className="mt-10" src={Image1} alt="scotty" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="grid col-span-2">
            <Description key={0} title={last.heading} texts={last.para} />
          </div>
          <Image className="mt-10" src={Image2} alt="far-out" />
        </div>
        <div className="my-9">
          <Image src={Image3} alt="rocket" />
        </div>
      </div>
      <Timeline />
    </div>
  );
};

export default page;
