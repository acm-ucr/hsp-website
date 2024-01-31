import React from "react";
import Profile from "@/components/board/Profile";
import LeadTitle from "./LeadTitle";
import BOARD from "@/data/Board";
const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-500 w-full">
      <LeadTitle Name="executive" />
      <br />
      <div className="grid grid-cols-4 bg-red-200 w-10/12 justify-items-center">
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
      <div className="bg-red-200 w-10/12 justify-items-center grid grid-cols-4">
        {BOARD[1].map((person, index) => (
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
      <div className="grid grid-cols-3 w-3/5 bg-red-200 justify-items-center pt-2 pb-4">
        {BOARD[2].map((person, index) => (
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
    </div>
  );
};

export default Team;
