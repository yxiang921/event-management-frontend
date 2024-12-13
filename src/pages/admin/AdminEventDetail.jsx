import { useState } from "react";
import {
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Edit2,
  Trash2,
  Mail,
  Phone,
  Download,
  Share2,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminEventDetail() {
  const [activeTab, setActiveTab] = useState("details");

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
          {activeTab === "details" && (
            <div className="space-y-6">
              {/* Event Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Event Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Date
                        </p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Time
                        </p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Location
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Organizer Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Organizer
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.organizer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Email
                        </p>
                        <p className="text-sm text-gray-500">
                          john.smith@example.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          Phone
                        </p>
                        <p className="text-sm text-gray-500">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Information */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Ticket Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Tickets Sold</p>
                    <p className="text-2xl font-semibold mt-1">
                      {event.tickets.sold}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Available Tickets</p>
                    <p className="text-2xl font-semibold mt-1">
                      {event.tickets.available}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Ticket Price</p>
                    <p className="text-2xl font-semibold mt-1">
                      {event.tickets.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          )}

          {activeTab === "attendees" && (
            <div className="space-y-6">
              {/* Attendee Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Total Registrations</p>
                  <p className="text-2xl font-semibold mt-1">
                    {event.attendees.total}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Confirmed</p>
                  <p className="text-2xl font-semibold mt-1">
                    {event.attendees.confirmed}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-semibold mt-1">
                    {event.attendees.pending}
                  </p>
                </div>
              </div>

              {/* Attendee Actions */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Download size={20} className="mr-2" />
                  Export List
                </button>
                <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Mail size={20} className="mr-2" />
                  Email All
                </button>
                <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Share2 size={20} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-6">
              {event.schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-24">
                    <p className="text-sm font-medium text-gray-900">
                      {item.time}
                    </p>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-6">
              {event.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start">
                  {activity.type === "registration" && (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  )}
                  {activity.type === "update" && (
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                  )}
                  {activity.type === "message" && (
                    <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                  )}
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">{activity.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
