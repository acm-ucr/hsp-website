import React from "react";

const Header = ({ Name }) => {
  return (
    <div className="font-extralight text-center text-4xl lg:text-5xl font-montserrat w-full mt-4">
      {Name}
      <div className="w-5/12 h-0.5 mx-auto bg-black/60 mt-3" />
    </div>
  );
};

export default Header;
