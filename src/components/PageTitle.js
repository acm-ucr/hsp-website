import Image from "next/image";
import starBackground from "../../public/assets/starBackground.webp";

const PageTitle = ({ title }) => {
  return (
    <div className="relative w-screen">
      <Image
        src={starBackground}
        alt="Star Background"
        className=" w-full hidden md:block"
      />
      <div className="hidden md:block font-montserrat absolute top-28 inset-x-0 text-white text-5xl font-bold text-center">
        {title}
      </div>
    </div>
  );
};

export default PageTitle;
