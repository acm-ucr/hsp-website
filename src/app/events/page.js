import React from "react";
import Event from "@/components/events/Event";
import PageTitle from "@/components/PageTitle";

const page = () => {
  return (
    <div>
      <PageTitle title="EVENTS" />
      <Event />
    </div>
  );
};

export default page;
