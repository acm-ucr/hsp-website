import React from "react";
import Profile from "../components/board/Profile";
import Javen from "../public/assets/board/Javen.svg";

const Home = () => {
  return (
    <Profile
      name={"Javen Dosanjh"}
      title={"Chief Engineer & President of Operations"}
      year={"4th year"}
      major={"Mechanical Engineering"}
      pronouns={"He/Him"}
      image={Javen}
      email={"mailto:asdf"}
      linkedin={"https://www.linkedin.com/in/javen-dosanjh-5a3a001a4/"}

    />
  );
};

export default Home;
