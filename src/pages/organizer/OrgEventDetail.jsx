import { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ScanQrCode,
  Users,
} from "lucide-react";
import { deleteEvent, getEventById } from "../../services";
import { useParams } from "react-router-dom";

const OrgEventDetail = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [event, setEvent] = useState([]);
  const { id } = useParams();
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
    const matchesFilter =
      selectedFilter === "all" || attendee.status === selectedFilter;
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    async function fetchAPI() {
      const response = await getEventById(id);
      const data = response.event;
      console.log(data);
      setEvent(data);
    }

    fetchAPI();
  }, [id]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Event Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <a onClick={() => window.history.back()}>
          <button className="flex items-center text-gray-600 hover:text-primary-900 transition-colors duration-200 mb-4">
            <ChevronLeft size={20} />
            <span className="ml-1">Back to Events</span>
          </button>
        </a>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{event?.title}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {event?.date?.split("T")[0]}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {event?.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {event?.location}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {event?.attendees?.length}/{event?.maxCapacity}
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => {
                // open camera
                navigator.mediaDevices
                  .getUserMedia({ video: true })
                  .then((stream) => {
                    const video = document.createElement("video");
                    video.srcObject = stream;
                    video.play();
                    document.body.appendChild(video);
                  })
                  .catch((err) => {
                    console.error("Error accessing camera: ", err);
                  });
              }}
              className="px-4 py-2 flex flex-row items-center bg-primary-900 text-white border border-gray-300 rounded-lg hover:bg-primary-hover"
            >
              <ScanQrCode className="h-4 w-4" />
              <span className="px-4">Sign Attendance</span>
            </button>
            <button
              onClick={async () => {
                if (
                  window.confirm("Are you sure you want to delete this event?")
                ) {
                  await deleteEvent(id);
                  window.location.href = "/organizer";
                }
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-1">Total Registered</p>
            <p className="text-2xl font-bold">{event?.attendees?.length}</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold mb-2">About This Event</h3>
          <p className="text-gray-600 mb-6">{event?.description}</p>

          <h3 className="text-lg font-semibold mb-2">Event Schedule</h3>
          <div className="space-y-4 mb-6">
            {event?.schedule?.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg"
              >
                <div className="text-gray-900 font-medium min-w-[100px]">
                  {item.split("-")[0]}
                </div>
                <div className="text-gray-700">{item.split("-")[1]}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-2">Speakers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {event?.speakers?.map((speaker, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg">{speaker}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* Attendance Management */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Attendance Management</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search attendees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All</option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="pending">Pending</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
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
                    <td>
                      <button
                      onClick={() => {
                        console.log(`Marking ${attendee.name} as present`);
                      }}
                      // {attendee === "present" ? "disabled" : ""}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Present
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgEventDetail;
