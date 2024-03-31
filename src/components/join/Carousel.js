import Image from "next/image";
import { carousel } from "@/data/Poseidon/carousel";

const Carousel = () => {
  return (
    <div className="relative flex overflow-hidden w-screen scale-150 lg:scale-100 mb-10">
      <div className="flex animate-marquee justify-evenly w-full">
        {carousel.map((image, index) => (
          <div key={index} className="">
            <Image src={image} alt="carousel" className="rounded-xl" />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation justify-between w-full h-full">
        {carousel.map((image, index) => (
          <div key={index} className="">
            <Image src={image} alt="carousel" className="rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
