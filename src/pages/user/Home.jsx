import { useEffect, useState } from "react";
import { HeroBanner, UpcomingEventCard } from "../../components";
import { getEvents } from "../../services";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const data = await getEvents();
      setEvents(data.events);
    }
    fetchApi();
  }, []);

  const latestEvent = events[0];

  return (
    <div>
      <HeroBanner event={latestEvent} />
      <div className="px-4 md:px-24 w-full h-auto my-4">
        <h1 className="font-bold text-2xl text-gray-900 py-4">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {events?.map((event, key) => {
            if (event.status != "Declined") {
              return <UpcomingEventCard key={key} event={event} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
