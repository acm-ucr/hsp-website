import React from "react";
import Profile from "@/components/board/Profile";
import LeadTitle from "./Header";
import BOARD from "@/data/Board";
const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-10">
      <LeadTitle Name="executive leads" />
      <br />
      <div className="flex flex-wrap items-end justify-center w-10/12 space-x-4 space-y-4">
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
      <LeadTitle Name="technical leads" />
      <br />
      <div className="flex flex-wrap items-end justify-center w-10/12 space-x-4 space-y-4">
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
      {/* <div className="grid grid-cols-3 bg-red-200 justify-items-center pt-2 pb-4">
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
      </div> */}
    </div>
  );
};

export default Team;
