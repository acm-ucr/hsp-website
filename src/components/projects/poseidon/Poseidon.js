import React from "react";
import PageTitle from "@/components/PageTitle";
import Propulsion from "./Propulsion";
import Avionics from "./Avionics";
const Poseidon = () => {
  return (
    <div>
      <PageTitle title="Poseidon" />
      <Propulsion />
      <Avionics />
    </div>
  );
};

export default Poseidon;
