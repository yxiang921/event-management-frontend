import { CheckCircle, Clock, XCircle } from "lucide-react";
import {
  OrgCreateEvent,
  OrgEventList,
  OrgHeader,
  OrgOverview,
} from "../../components";
import { useOrgHeader } from "../../context/OrgHeaderContext";
import { getEvents } from "../../services/event";
import { useEffect, useState } from "react";

const OrganizerDashboard = () => {
  const { activeTab } = useOrgHeader();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const data = await getEvents();
        setEvents(data.events);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "Pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "Declined":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <OrgOverview
            events={events}
            getStatusColor={getStatusColor}
            getStatusIcon={getStatusIcon}
          />
        );
      case "createEvent":
        return <OrgCreateEvent />;
      case "eventList":
        return <OrgEventList events={events} getStatusColor={getStatusColor} />;
      default:
        return <OrgOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OrgHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">{renderTabContent()}</main>
    </div>
  );
};

export default OrganizerDashboard;
