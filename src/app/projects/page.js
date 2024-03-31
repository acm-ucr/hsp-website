import Description from "@/components/projects/poseidon/Description";
import texts from "@/data/Poseidon/Poseidon";
import Image from "next/image";
import Image1 from "../../../public/assets/projects/poseidon/scotty.webp";
import Image2 from "../../../public/assets/projects/poseidon/far.webp";
import Image3 from "../../../public/assets/projects/poseidon/rocket.webp";
import PageTitle from "@/components/PageTitle";
import Propulsion from "@/components/projects/poseidon/Propulsion";
import Avionics from "@/components/projects/poseidon/Avionics";
import Structures from "@/components/projects/poseidon/Structures";
import Timeline from "@/components/projects/poseidon/Timeline";

const page = () => {
  const first = texts[0];
  const last = texts[texts.length - 1];

  return (
    <div className="flex justify-center flex-col items-center font-sans">
      <PageTitle title="POSEIDON" />
      <div className="w-full lg:w-8/12">
        <div className="flex flex-col md:flex-row justify-start lg:items-start items-center">
          <Description key={0} title={first.heading} texts={first.para} />
          <Image className="lg:mt-10 " src={Image1} alt="scotty" />
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center">
          <Description key={0} title={last.heading} texts={last.para} />
          <Image src={Image2} alt="far-out" className="w-8/12 lg:w-fit" />
        </div>
        <Image src={Image3} alt="rocket" />
      </div>
      <Timeline />
      <Propulsion />
      <Avionics />
      <Structures />
    </div>
  );
};

export default page;
