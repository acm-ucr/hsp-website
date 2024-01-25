import React from "react";
import Card from "@/components/join/Card";

const page = () => {
  return (
    <div className="justify justify-center grid grid-cols-3 mx-28 my-28">
      <Card
        title="Come to our meetings and events"
        description="HSP regularly conducts meetings and work sessions that build towards competitions."
      />
      <Card
        title="Join Our Discord"
        description="Join our Discord to communicate with us and have access to all our channels. It’s a great resource for seeking internships and on-campus jobs."
      />
      <Card
        title="Follow our Socials"
        description="Following our socials will keep you updated on what's happening with HSP!"
      />
    </div>
  );
};

export default page;
