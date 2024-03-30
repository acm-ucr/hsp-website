import PageTitle from "@/components/PageTitle";
import Propulsion from "./Propulsion";
import Avionics from "./Avionics";
import Timeline from "@/components/projects/poseidon/Timeline";
const Poseidon = () => {
  return (
    <div>
      <PageTitle title="Poseidon" />
      <Timeline />
      <Propulsion />
      <Avionics />
    </div>
  );
};

export default Poseidon;
