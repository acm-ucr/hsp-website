import React from "react";
import Profile from "@/components/board/Profile";
import LeadTitle from "./LeadTitle";
import BOARD from "@/data/Board";
const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-500 w-full">
      <LeadTitle Name="executive" />
      <div className="bg-red-200 w-full justify-center items-center grid grid-cols-4">
        {BOARD[0].map((person, index) => (
          <Profile
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            email={person.email}
            linkedin={person.linkedin}
            year={person.year}
            major={person.major}
            pronouns={person.pronouns}
          />
        ))}
      </div>
      <LeadTitle Name="technical" />
      <div className="bg-red-200 w-full justify-center items-center grid grid-cols-4">
        {BOARD[0].map((person, index) => (
          <Profile
            key={index}
            name={person.name}
            title={person.title}
            image={person.image}
            email={person.email}
            linkedin={person.linkedin}
            year={person.year}
            major={person.major}
            pronouns={person.pronouns}
          />
        ))}
      </div>
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default Team;
