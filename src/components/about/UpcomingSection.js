"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import shootingStar from "../../../public/assets/about/shootingStar.png";
import bar from "../../../public/assets/about/bar.png";
import Event from "../events/Event";
import moment from "moment";
import axios from "axios";
import Button from "../about/Button";

const UpcomingSection = ({ showCurrent = false, showPast = false }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const startDate = moment().subtract(10, "weeks").toISOString();
    const endDate = moment().add(10, "weeks").toISOString();

    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}&maxResults=10`
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
      });
  }, []);

  const upcoming = events.filter((e) => e.start >= new Date());
  const past = events.filter((e) => e.start <= new Date());

  return (
    <div>
      {!showCurrent && !showPast && (
        <div className="flex justify-center">
          <Image src={bar} alt="Left Bar" className="h-full hidden md:block" />
          <div className="flex flex-col justify-start items-center">
            <div className="flex justify-center items-start w-full mt-14">
              <Image
                src={shootingStar}
                alt="ShootingStar"
                className=" hidden md:block "
              />
              <div className="text-4xl lg:text-6xl font-montserrat font-extralight text-center mx-2">
                {" "}
                Upcoming Events{" "}
              </div>
              <Image
                src={shootingStar}
                alt="ShootingStar"
                className=" rotate-180 hidden md:block "
              />
            </div>
            {upcoming.length !== 0 ? (
              upcoming.slice(0, 3).map((event, index) => (
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
            <Button />
          </div>

          <Image src={bar} alt="Right Bar" className="h-full hidden md:block" />
        </div>
      )}
      {showCurrent && (
        <div className="flex flex-col justify-center items-center w-full">
          {upcoming.length !== 0 ? (
            upcoming.slice(0, 4).map((event, index) => (
              <div className="flex w-11/12 lg:w-5/12  my-3" key={index}>
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
      )}
      {showPast && (
        <div className="flex flex-col justify-center items-center w-full">
          {past.length !== 0 ? (
            past.slice(0, 3).map((event, index) => (
              <div className="flex w-11/12 lg:w-5/12  my-3" key={index}>
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
              No Past Events Available, please check back later!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingSection;
