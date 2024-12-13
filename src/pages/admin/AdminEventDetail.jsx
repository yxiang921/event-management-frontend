import { useEffect, useState } from "react";
import { ChevronLeft, Edit2, Trash2 } from "lucide-react";
import {
  EventActivityTab,
  EventAttendeesTab,
  EventDetailTab,
  EventScheduleTab,
} from "../../components";
import events from "../../utils/events";

export default function AdminEventDetail() {
  const [activeTab, setActiveTab] = useState("details");

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const event = {
    id: 1,
    name: "Tech Conference 2024",
    status: "upcoming",
    date: "2024-12-15",
    time: "09:00 AM - 05:00 PM",
    location: "Convention Center, 123 Main St, City",
    organizer: "John Smith",
    type: "Conference",
    description:
      "Join us for the biggest tech conference of the year, featuring industry leaders and innovative discussions.",
    attendees: {
      total: 250,
      confirmed: 180,
      pending: 70,
    },
    tickets: {
      sold: 180,
      available: 70,
      price: "$299",
    },
    schedule: [
      { time: "09:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Keynote Speech" },
      { time: "11:30 AM", activity: "Panel Discussion" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM", activity: "Workshop Sessions" },
      { time: "04:30 PM", activity: "Closing Remarks" },
    ],
    recentActivity: [
      {
        type: "registration",
        message: "New registration by Alice Johnson",
        time: "2 hours ago",
      },
      {
        type: "update",
        message: "Schedule updated for morning session",
        time: "5 hours ago",
      },
      {
        type: "message",
        message: "New inquiry about parking facilities",
        time: "1 day ago",
      },
    ],
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
            <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
            <div className="flex items-center mt-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  event.status
                )}`}
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
              <span className="ml-3 text-gray-500">{event.type}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Edit2 size={20} />
            </button>
            <button className="px-4 py-2 border rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200">
              <Trash2 size={20} />
            </button>
            <button className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200">
              Publish Changes
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b">
          <nav className="flex space-x-6 px-6">
            {["details", "attendees", "schedule", "activity"].map((tab) => (
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

          {activeTab === "attendees" && <EventAttendeesTab event={event} />}

          {activeTab === "schedule" && <EventScheduleTab event={event} />}

          {activeTab === "activity" && <EventActivityTab event={event} />}
        </div>
      </div>
    </div>
  );
}
