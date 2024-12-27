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
  const [event, setEvent] = useState([]);
  const { id } = useParams();

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
            <button className="px-4 py-2 flex flex-row items-center bg-primary-900 text-white border border-gray-300 rounded-lg hover:bg-primary-hover">
              <ScanQrCode className="h-4 w-4" />
              <span className="px-4">Sign Attendance</span>
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
      {/* delete event */}
      <div className="flex justify-end">
        <button
          onClick={async () => {
            if (window.confirm("Are you sure you want to delete this event?")) {
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
  );
};

export default OrgEventDetail;
