import React from "react";
import Profile from "@/components/board/Profile";
import Javen from "@/public/assets/board/Javen.svg";
const Team = () => {
  return (
    <div>
      <div className="font-montserrat flex justify-center text-4xl font-light ">
        <div className="w-1/4 border-b border-black flex justify-center h-14">
          executive leads
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center bg-green-200">
        <div className="grid grid-cols-4 gap-7 justify-center items-center bg-red-200">
          <div>
            <Profile
              name="Javen Dosanjh"
              email="rfair008@ucr.edu"
              title="Vice President"
              image={Javen}
              year="2nd"
              major="Computer Science"
              pronouns="he/him"
              linkedin="linkedin.com"
            />
          </div>
          <div>
            <Profile
              name="Javen Dosanjh"
              email="rfair008@ucr.edu"
              title="Vice President"
              image={Javen}
              year="2nd"
              major="Computer Science"
              pronouns="he/him"
              linkedin="linkedin.com"
            />
          </div>
          <div>
            <Profile
              name="Javen Dosanjh"
              email="rfair008@ucr.edu"
              title="Vice President"
              image={Javen}
              year="2nd"
              major="Computer Science"
              pronouns="he/him"
              linkedin="linkedin.com"
            />
          </div>
          <div>
            <Profile
              name="Javen Dosanjh"
              email="rfair008@ucr.edu"
              title="Vice President"
              image={Javen}
              year="2nd"
              major="Computer Science"
              pronouns="he/him"
              linkedin="linkedin.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
