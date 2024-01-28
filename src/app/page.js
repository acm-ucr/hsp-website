import React from "react";
import PageTitle from "@/components/PageTitle";
import Team from "@/components/board/Team";

const Home = () => {
  return (
    <>
      <PageTitle PageTitle="Title" />
      <div>
        <Team />
      </div>
    </>
  );
};
export default Home;
