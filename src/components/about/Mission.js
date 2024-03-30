import Image from "next/image";

const Mission = ({ title, img, texts }) => {
  return (
    <div className="my-8 flex flex-col">
      <div className="font-montserrat text-white text-center text-2xl font-black mb-10">
        {title}
      </div>

      <div className="flex justify-center items-center">
        <Image src={img} alt="hsp building and testing rockets" />
      </div>
      {texts.map((text, index) => (
        <div
          key={index}
          className="font-montserrat text-white flex items-center text-center text-base lg:text-lg font-semibold mt-8 "
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Mission;
