import Profile from "@/components/board/Profile";
import Header from "./Header";
import BOARD from "@/data/Board";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-10">
      <Header Name="executive leads" />
      <br />
      <div className="flex flex-wrap items-end justify-center w-11/12 lg:space-x-4 space-y-4">
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
      <Header Name="technical leads" />
      <br />
      <div className="flex flex-wrap items-end justify-center w-11/12 lg:space-x-4 space-y-4">
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
    </div>
  );
};

export default Team;
