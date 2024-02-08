import React from "react";
import PageTitle from "@/components/PageTitle";
import HeaderTitle from "@/components/board/Header";

const page = () => {
  return (
    <div>
      <PageTitle title="EVENTS" />
      <HeaderTitle Name={"Upcoming Events"} />
      <HeaderTitle Name={"Past Events"} />
    </div>
  );
};

export default page;
