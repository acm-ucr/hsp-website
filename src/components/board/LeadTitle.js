import React from "react";

const LeadTitle = ({ Name }) => {
  return (
    <div className="Leads-Title-Container text-center text-4xl font-montserrat pt-2.5 -pb-1.5">
      {Name}
      <hr className="w-1/4 h-0.5 mx-auto bg-black border-0" />
    </div>
  );
};

export default LeadTitle;
