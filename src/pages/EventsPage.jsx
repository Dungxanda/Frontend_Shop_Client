import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import PageNotfound from "./PageNotfound";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  // Kiểm tra sự tồn tại của allEvents trước khi gọi length
  console.log(allEvents?.length || 0);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="my-6 mx-6">
            {allEvents && allEvents.length === 0 ? (
              <PageNotfound />
            ) : (
              <>
                {allEvents &&
                  allEvents.map((event, index) => (
                    <EventCard key={index} data={event} active={index === 0} />
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
