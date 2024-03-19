import React from "react";

const Descriptions = ({ title, texts }) => {
  return (
    <div className="text-center md:justify-start">
      <div className="font-montserrat md:text-3xl text-xl font-bold leading-10 my-2">
        {title}
      </div>

      {texts.map((text, index) => (
        <div
          key={index}
          className="font-sans md:text-lg text-base mb-3 md:leading-9 leading-8"
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
