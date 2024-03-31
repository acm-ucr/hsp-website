import Image from "next/image";
import { carousel } from "@/data/Poseidon/carousel";

const Carousel = () => {
  return (
    <div className="relative flex overflow-hidden  scale-150 lg:scale-100 mb-10">
      <div className="flex animate-marquee">
        {carousel.map((image, index) => (
          <div key={index} className="flex-grow items-stretch mx-1 sm:mx-4">
            <Image
              src={image}
              alt="carousel"
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation">
        {carousel.map((image, index) => (
          <div key={index} className=" flex-grow items-stretch mx-1 sm:mx-4">
            <Image
              src={image}
              alt="carousel"
              className="object-cover-full w-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
