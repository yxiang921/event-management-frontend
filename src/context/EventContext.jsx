/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getEvents } from "../services";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const data = await getEvents();
      setEvents(data.events);
    }
    fetchApi();
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventsContext);
};
