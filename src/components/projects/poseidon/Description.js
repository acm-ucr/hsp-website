import React from "react";

const Description = ({ title, texts }) => {
  return (
    <div className="p-4">
      <div className="font-montserrat text-xl lg:text-3xl font-bold leading-10 my-2">
        {title}
      </div>

      {texts.map((text, index) => (
        <div
          key={index}
          className="font-sans text-base lg:text-lg mb-3 leading-8 lg:leading-9"
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
