import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  ChevronDown,
  Edit2,
  Trash2,
  Eye,
} from "lucide-react";
import Button from "../../components/Button";
export default function AdminEvents() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-12-15",
      time: "09:00 AM",
      location: "Convention Center",
      organizer: "John Smith",
      attendees: 250,
      status: "upcoming",
      type: "Conference",
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-12-20",
      time: "04:00 PM",
      location: "City Park",
      organizer: "Sarah Johnson",
      attendees: 1000,
      status: "planning",
      type: "Festival",
    },
    {
      id: 3,
      name: "Corporate Workshop",
      date: "2024-12-10",
      time: "10:00 AM",
      location: "Business Center",
      organizer: "Mike Wilson",
      attendees: 50,
      status: "completed",
      type: "Workshop",
    },
    {
      id: 4,
      name: "Charity Gala",
      date: "2024-12-25",
      time: "07:00 PM",
      location: "Grand Hotel",
      organizer: "Emma Davis",
      attendees: 150,
      status: "upcoming",
      type: "Gala",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || event.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEvents(filteredEvents.map((event) => event.id));
    } else {
      setSelectedEvents([]);
    }
  };

  const handleSelectEvent = (eventId) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter((id) => id !== eventId));
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "planning":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter size={20} />
                <span>Filter</span>
                <ChevronDown size={16} />
              </button>
              {filterOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border p-2 z-10">
                  {["all", "upcoming", "planning", "completed"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setSelectedStatus(status);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200
                        ${
                          selectedStatus === status
                            ? "bg-primary-900 text-white hover:bg-primary-800"
                            : ""
                        }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          <Button width="w-full sm:w-auto " height="h-12">
            <Plus size={20} style={{ marginRight: '2px'}}/>
            Add Event
          </Button>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      selectedEvents.length === filteredEvents.length &&
                      filteredEvents.length > 0
                    }
                    className="rounded border-gray-300 text-primary-900 focus:ring-primary-900"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvents.map((event) => (
                <tr
                  key={event.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedEvents.includes(event.id)}
                      onChange={() => handleSelectEvent(event.id)}
                      className="rounded border-gray-300 text-primary-900 focus:ring-primary-900"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {event.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Organized by: {event.organizer}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.attendees} attendees • {event.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.date}</div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {event.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-600 hover:text-primary-900 transition-colors duration-200">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-primary-900 transition-colors duration-200">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
