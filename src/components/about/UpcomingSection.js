"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import shootingStar from "@/public/assets/about/shootingStar.svg";
import shootingStar2 from "@/public/assets/about/shootingStar2.svg";
import bar from "@/public/assets/about/bar.svg";
import Event from "../events/Event";
import moment from "moment";
import axios from "axios";
// import { momentLocalizer } from "react-big-calendar";
// const mLocalizer = momentLocalizer(moment);

const UpcomingSection = () => {
  const [events, setEvents] = useState([]);
  // const [date, setDate] = useState(new Date());
  const size = 3;

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();

    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}&maxResults=${size}`
      )
      .then((response) => {
        const calendarEvents = response.data.items.map((a) => {
          a.start = a.start.dateTime
            ? new Date(a.start.dateTime)
            : new Date(a.start.date);
          a.end = a.end.dateTime
            ? new Date(a.end.dateTime)
            : new Date(a.end.date);
          a.isAllDay = !a.start.dateTime;
          return a;
        });

        setEvents(calendarEvents);
        console.log(events);
      });
  }, [size]);
  const upcoming = events.filter((e) => e.start >= new Date());

  return (
    <div className="flex justify-center">
      <Image src={bar} alt="Left Bar" className="h-full" />
      {/* {barImages.map((pic, index) => (
        <Image src={pic}/>
      ))} */}
      <div className="flex flex-col justify-start items-center">
        <div class=" flex justify-center items-start w-full  ">
          <Image src={shootingStar} alt="ShootingStar" className="rotate-180" />
          <div className="text-6xl font-montserrat font-extralight text-center mx-4 mt-14">
            {" "}
            Upcoming Events{" "}
          </div>
          <Image
            src={shootingStar2}
            alt="ShootingStar2"
            className="rotate-180 "
          />
        </div>
        {console.log(events)};
        {upcoming.length !== 0 ? (
          upcoming.map((event, index) => (
            <div className="flex w-8/12  my-3" key={index}>
              <Event
                month={event.start
                  .toLocaleDateString("en-US", { month: "short" })
                  .toUpperCase()}
                day={event.start.toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
                title={event.summary}
                location={event.location}
                start={
                  event.isAllDay
                    ? "All Day"
                    : event.start.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                }
                description={event.description}
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center text-lg md:text-2xl text-center text-black font-urbanist p-3">
            No upcoming events, please check back later!
          </div>
        )}
      </div>

      <Image src={bar} alt="Right Bar" className="h-full" />
    </div>
  );
};

export default UpcomingSection;
