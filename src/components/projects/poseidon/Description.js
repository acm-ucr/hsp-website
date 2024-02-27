import React from "react";

const Description = ({ title, texts }) => {
  return (
    <div className="p-4">
      <div className="font-montserrat text-3xl font-bold leading-10 my-2">
        {title}
      </div>

      {texts.map((text, index) => (
        <div key={index} className="font-sans text-lg mb-3 leading-9">
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
