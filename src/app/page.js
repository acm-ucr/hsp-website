import React from "react";
import Profile from "../components/board/Profile";
import Javen from "../public/assets/board/Javen.svg";
const Home = () => {
  return (
    <Profile
      name={"Javen Dosanjh"}
      image={Javen}
      title={"Chief Engineer & President of Operations"}
      year={"4th year"}
      major={"Mechanical Engineering"}
    />
  );
};

export default Home;
