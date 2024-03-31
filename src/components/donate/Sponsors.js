import Image from "next/image";

const Sponsors = ({ logos }) => {
  return (
    <div className="mt-12 text-center flex flex-col justify-center items-center h-full">
      <div className="mb-2 text-3xl lg:text-6xl font-extrabold font-urbanist">
        Sponsors
      </div>
      <div className="justify-center font-sans text-lg w-full">
        We are excited to share our progress and our future goals. Thank you for
        your support.
      </div>
      <div className="my-12 flex flex-wrap justify-start">
        {logos.map((logos, index) => (
          <div key={index} className="flex flex-wrap m-2">
            <Image src={logos.img} alt={""} width={250} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sponsors;
