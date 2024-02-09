import React from "react";
import Mission from "@/components/about/Mission";
import Us from "@/components/about/Us";
import texts from "@/data/Mission";
import Landing from "@/components/about/Landing";

const page = () => {
  return (
    <div>
      <Landing />
      <Us />
      <div className="flex flex-col justify-center items-center bg-black my-12">
        <div className="grid grid-cols-3 gap-10 w-9/12 bg-black">
          {texts.map((paragraph, index) => (
            <Mission
              key={index}
              title={paragraph.title}
              img={paragraph.img}
              texts={paragraph.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default Home;
=======

export default page;
>>>>>>> a654cf1ab5b56f5d0cafe24d4b778e85627b3881
