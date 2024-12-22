import { useEffect, useState } from "react";
import { Ban, Check, ChevronLeft } from "lucide-react";
import {
  Button,
  EventAttendeesTab,
  EventDetailTab,
  EventScheduleTab,
} from "../../components";
import { useParams } from "react-router-dom";
import { decideEvent, getEventAttendees, getEventById } from "../../services";
import toast from "react-hot-toast";

export default function AdminEventDetail() {
  const [activeTab, setActiveTab] = useState("details");

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const [event, setEvent] = useState([]);
  const [attendees, setAttendees] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchApi() {
      const data = await getEventById(id);
      setEvent(data.event);
    }

    async function fetchAttendees() {
      const data = await getEventAttendees(id);
      setAttendees(data.attendees);
    }

    fetchApi();
    fetchAttendees();
  }, [id]);

  const handlerDecide = async (status) => {
    console.log("status", status);
    try {
      await decideEvent(id, status);
      setEvent({ ...event, status });

      toast.success(`Event has been ${status.toLowerCase()}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update event status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <a href="/admin/events">
          <button className="flex items-center text-gray-600 hover:text-primary-900 transition-colors duration-200 mb-4">
            <ChevronLeft size={20} />
            <span className="ml-1">Back to Events</span>
          </button>
        </a>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
            <div className="flex items-center mt-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  event.status?.toLowerCase()
                )}`}
              >
                {event.status}
              </span>
              <span className="ml-3 text-gray-500">{event.type}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            {/* post req */}
            <a onClick={() => handlerDecide("Approved")}>
              <Button variant="success">
                <Check size={18} style={{ marginRight: "4px" }} />
                Approve
              </Button>
            </a>
            <a onClick={() => handlerDecide("Declined")}>
              <Button variant="danger">
                <Ban size={18} style={{ marginRight: "4px" }} />
                Reject
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b">
          <nav className="flex space-x-6 px-6">
            {["details", "attendees", "schedule"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-200 
                  ${
                    activeTab === tab
                      ? "border-primary-900 text-primary-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "details" && <EventDetailTab event={event} />}

          {activeTab === "attendees" && (
            <EventAttendeesTab attendees={attendees} />
          )}

          {activeTab === "schedule" && <EventScheduleTab event={event} />}
        </div>
      </div>
    </div>
  );
}
