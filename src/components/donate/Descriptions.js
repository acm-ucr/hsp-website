import React from "react";

const Descriptions = ({ title, texts }) => {
  return (
    <div>
      <div className="font-montserrat text-3xl font-black leading-10 my-2">
        {title}
      </div>

      {texts.map((text, index) => (
        <div key={index} className="text-xl leading-9">
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
