// import Event from "@/components/events/Event";
import PageTitle from "@/components/PageTitle";
import HeaderTitle from "@/components/board/Header";
import UpcomingSection from "@/components/about/UpcomingSection";
const page = () => {
  return (
    <div>
      <PageTitle title="EVENTS" />
      <HeaderTitle Name={"Upcoming Events"} />
      <UpcomingSection showCurrent={true} />
      <HeaderTitle Name={"Past Events"} />
      <UpcomingSection showPast={true} />
    </div>
  );
};

export default page;
