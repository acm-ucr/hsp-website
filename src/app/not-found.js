import Link from "next/link";
import bear from "../../public/assets/bear.png";
import Image from "next/image";

const error = () => {
  return (
    <div className=" flex flex-col my-20 items-center gap-8 justify-center font-montserrat">
      <div className="flex flex-col items-center gap-2 text-center">
        <br />
        <div className="text-2xl lg:text-4xl font-bold">
          {" "}
          404 Error: Page Not Found
        </div>
        <br />
        <div className="text-xl lg:text-2xl">
          This is uncharted territory. Please return to the
          <Link href="/" className="px-2 underline hover:text-hsp-yellow">
            home
          </Link>
          page.
        </div>

        <div className="items-center justify-center w-1/2 h-1/2">
          <Image src={bear} alt="" />
        </div>
      </div>
    </div>
  );
};

export default error;
