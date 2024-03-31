import Card from "@/components/join/Card";
import { FaDiscord } from "react-icons/fa";
import Carousel from "@/components/join/Carousel";

const page = () => {
  return (
    <div className="items-center justify-center flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-3 my-28 w-11/12 gap-4 ">
        <Card
          title="Attend Meetings and Events"
          description="HSP regularly conducts meetings and work sessions that build towards competitions."
        />
        <Card
          title="Join our Discord"
          description="Join our Discord to communicate with us and have access to all our channels. It’s a great resource for seeking internships and on-campus jobs."
          icon={
            <FaDiscord className="text-black pt-3 hover:opacity-50" size={75} />
          }
          discord={true}
        />

        <Card
          title="Follow our Socials"
          description="Following our socials will keep you updated on what's happening with HSP!"
        />
      </div>
      <Carousel />
    </div>
  );
};

export default page;
