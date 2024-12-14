import { CheckCircle, Clock, XCircle } from "lucide-react";
import {
  OrgCreateEvent,
  OrgEventList,
  OrgHeader,
  OrgOverview,
} from "../../components";
import { useOrgHeader } from "../../context/OrgHeaderContext";

const OrganizerDashboard = () => {
  const { activeTab } = useOrgHeader();

  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-12-15",
      attendees: 250,
      status: "Pending Approval",
      description: "Annual technology conference featuring industry leaders",
      location: "Convention Center",
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-12-20",
      attendees: 1000,
      status: "Approved",
      description: "Three-day music festival with multiple stages",
      location: "City Park",
    },
    {
      id: 3,
      name: "Corporate Workshop",
      date: "2024-12-10",
      attendees: 50,
      status: "Rejected",
      description: "Leadership development workshop",
      location: "Business Center",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending Approval":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "Pending Approval":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "Rejected":
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
