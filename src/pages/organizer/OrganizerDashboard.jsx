import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Filter,
  Search,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const myEvents = [
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

  const attendeesList = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      ticket: "VIP",
      event: "Tech Conference 2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      ticket: "Regular",
      event: "Tech Conference 2024",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      ticket: "VIP",
      event: "Music Festival",
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
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Total Events</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Pending Approval</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Total Attendees</p>
                  <p className="text-2xl font-bold">1,300</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Events</h3>
              <div className="space-y-4">
                {myEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(event.status)}
                      <div>
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "createEvent":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Create New Event</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacity
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary-900 text-white px-6 py-2 rounded-lg hover:bg-primary-800"
                >
                  Submit for Approval
                </button>
              </div>
            </form>
          </div>
        );

      case "myEvents":
        return (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Event Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Attendees
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {myEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium">{event.name}</div>
                        <div className="text-sm text-gray-500">
                          {event.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {event.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {event.attendees}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "attendees":
        return (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Event Attendees</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search attendees..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg">
                    <option>All Events</option>
                    <option>Tech Conference 2024</option>
                    <option>Music Festival</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Ticket Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {attendeesList.map((attendee) => (
                    <tr key={attendee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium">
                        {attendee.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {attendee.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {attendee.event}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {attendee.ticket}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Event Organizer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 ${
                activeTab === "overview"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("createEvent")}
              className={`py-4 px-1 border-b-2 ${
                activeTab === "createEvent"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              Create Event
            </button>
            <button
              onClick={() => setActiveTab("myEvents")}
              className={`py-4 px-1 border-b-2 ${
                activeTab === "myEvents"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              My Events
            </button>
            <button
              onClick={() => setActiveTab("attendees")}
              className={`py-4 px-1 border-b-2 ${
                activeTab === "attendees"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              Attendees
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{renderTabContent()}</main>
    </div>
  );
};

export default OrganizerDashboard;
