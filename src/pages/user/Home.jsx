import { useEffect } from "react";
import { HeroBanner, UpcomingEventCard } from "../../components";
import events from "../../utils/events";

export default function Home() {

  useEffect(() => {
    console.log(events);
  }, []);

  return (
    <div>
      <HeroBanner />
      <div className="px-4 md:px-24 w-full h-auto my-4">
        <h1 className="font-bold text-2xl text-gray-900 py-4">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {events.map((event, key) => {
            return <UpcomingEventCard key={key} event={event} />;
          })}
        </div>
      </div>
    </div>
  );
}
