import React from "react";
import Profile from "@/components/board/Profile";
import Javen from "@/public/assets/board/Javen.svg";
const Team = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 w-10/12  gap-3 justify-center items-center bg-red-200">
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
  );
};

export default Team;
