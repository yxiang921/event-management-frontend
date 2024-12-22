/* eslint-disable react/prop-types */
import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetailTab = ({ event }) => {
  return (
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
                <p className="text-sm font-medium text-gray-900">Date</p>
                <p className="text-sm text-gray-500">
                  {new Date(event.date).toDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Time</p>
                <p className="text-sm text-gray-500">{event.time}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Location</p>
                <p className="text-sm text-gray-500">{event.location}</p>
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
              {event.attendees?.length}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Available Tickets</p>
            <p className="text-2xl font-semibold mt-1">
              {event?.maxCapacity - event.attendees?.length}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Ticket Price</p>
            <p className="text-2xl font-semibold mt-1">RM {event.price}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </div>
  );
};
export default EventDetailTab;
