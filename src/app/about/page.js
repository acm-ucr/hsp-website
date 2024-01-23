import React from "react";
import Mission from "@/components/about/Mission";
import Us from "@/components/about/Us";
import texts from "@/data/Mission";

const page = () => {
  return (
    <div>
      <Us />
      <div className="grid grid-cols-3 gap-3 bg-black">
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
  );
};

export default page;
