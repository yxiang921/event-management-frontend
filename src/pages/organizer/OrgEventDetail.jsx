import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Download,
  Search,
  ChevronLeft,
  ScanQrCode,
  Users,
} from "lucide-react";

const OrgEventDetail = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Updated event data
  const eventDetails = {
    id: 1,
    title: "Music Concert",
    date: "2024-12-01",
    time: "19:00",
    location: "City Arena",
    description: "A thrilling live concert featuring top artists.",
    price: "RM50.00",
    attendees: 250,
    maxCapacity: 300,
    type: "Conference",
    organizer: "John Smith",
    status: "approved",
    category: "Technology",
    schedule: [
      { time: "10:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "10:30 AM", activity: "Keynote Speech: Future of AI" },
      { time: "12:00 PM", activity: "Networking Lunch" },
      { time: "1:30 PM", activity: "Interactive Workshops" },
      { time: "3:30 PM", activity: "Panel Discussion" },
    ],
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        role: "AI Research Lead",
        company: "Tech Corp",
      },
      {
        name: "Prof. Michael Chen",
        role: "Department Head",
        company: "University",
      },
    ],
  };

  // Mock attendees data
  const attendees = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "present",
      checkInTime: "09:15 AM",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      status: "absent",
      checkInTime: null,
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol@example.com",
      status: "present",
      checkInTime: "09:05 AM",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david@example.com",
      status: "pending",
      checkInTime: null,
    },
  ];

  const filteredAttendees = attendees.filter((attendee) => {
    if (selectedFilter === "all") return true;
    return attendee.status === selectedFilter;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Event Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <a href="/organizer">
          <button className="flex items-center text-gray-600 hover:text-primary-900 transition-colors duration-200 mb-4">
            <ChevronLeft size={20} />
            <span className="ml-1">Back to Events</span>
          </button>
        </a>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{eventDetails.title}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {eventDetails.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {eventDetails.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {eventDetails.location}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {eventDetails.attendees}/{eventDetails.maxCapacity}
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 flex flex-row items-center bg-primary-900 text-white border border-gray-300 rounded-lg hover:bg-primary-hover">
              <ScanQrCode className="h-4 w-4" />
              <span className="px-4">Sign Attendance</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-1">Total Registered</p>
            <p className="text-2xl font-bold">{eventDetails.attendees}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-1">Present</p>
            <p className="text-2xl font-bold">
              {attendees.filter((a) => a.status === "present").length}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-1">Absent</p>
            <p className="text-2xl font-bold">
              {attendees.filter((a) => a.status === "absent").length}
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold mb-2">About This Event</h3>
          <p className="text-gray-600 mb-6">{eventDetails.description}</p>

          <h3 className="text-lg font-semibold mb-2">Event Schedule</h3>
          <div className="space-y-4 mb-6">
            {eventDetails.schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg"
              >
                <div className="text-gray-900 font-medium min-w-[100px]">
                  {item.time}
                </div>
                <div className="text-gray-700">{item.activity}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-2">Speakers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {eventDetails.speakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">{speaker.name}</h4>
                <p className="text-gray-600">{speaker.role}</p>
                <p className="text-gray-500">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Attendance Management</h2>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search attendees..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Attendees</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="pending">Pending</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
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
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Check-in Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAttendees.map((attendee) => (
                <tr key={attendee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">
                    {attendee.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {attendee.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        attendee.status === "present"
                          ? "bg-green-100 text-green-800"
                          : attendee.status === "absent"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {attendee.status.charAt(0).toUpperCase() +
                        attendee.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {attendee.checkInTime || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrgEventDetail;
