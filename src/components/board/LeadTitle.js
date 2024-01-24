import React from "react";

const LeadTitle = ({ Name }) => {
  return (
    <div className="font-extralight text-center text-5xl font-montserrat">
      {Name} leads
      <div className="w-5/12 h-0.5 mx-auto bg-black/60 mt-3" />
    </div>
  );
};

export default LeadTitle;
