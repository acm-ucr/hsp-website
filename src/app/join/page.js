import React from "react";
import Card from "@/components/join/Card";
import Card2 from "@/components/join/Card2";
import { MdGroups } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Carousel from "@/components/projects/poseidon/carousel.jsx";
const page = () => {
  return (
    <div className="justify justify-center grid grid-cols-3 my-28 mx-14">
      <Card2
        title="Come to our meetings and events"
        description="HSP regularly conducts meetings and work sessions that build towards competitions."
        icon={<MdGroups className="text-black" size={100} />}
      />
      <Card
        title="Join Our Discord"
        description="Join our Discord to communicate with us and have access to all our channels. It’s a great resource for seeking internships and on-campus jobs."
        icon={<FaDiscord className="text-black pt-3" size={75} />}
      />
      <Card2
        title="Follow our Socials"
        description="Following our socials will keep you updated on what's happening with HSP!"
        icon={<FaBell className="text-black justify pt-20" size={150} />}
      />
      <Carousel />
    </div>
  );
};

export default page;
