/* eslint-disable react/prop-types */
import { Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { getEvents } from "../../services/event";

const OrgEventList = ({ getStatusColor }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const data = await getEvents();
        setEvents(data.events);
        console.log(events);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  }, []);
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
                Description
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
            {events?.map((event) => (
              <tr key={event._id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4">
                  <a
                    href={`/organizer/event/${event._id}`}
                    className="font-medium hover:text-primary-900"
                  >
                    {event.title}
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-500">
                    {event.description}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {event.date.split("T")[0]}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {event.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {event.attendees.length}
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
};

export default OrgEventList;
