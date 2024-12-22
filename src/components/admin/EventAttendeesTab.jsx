/* eslint-disable react/prop-types */
import { Download, Share2, Mail } from "lucide-react";

const EventAttendeesTab = ({ attendees }) => {
  return (
    <div className="space-y-6">
      {/* Attendee Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total Registrations</p>
          <p className="text-2xl font-semibold mt-1">{attendees.length}</p>
        </div>
      </div>

      {/* Attendee List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{attendee.username}</td>
                <td className="py-2 px-4 border-b">{attendee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  );
};

export default EventAttendeesTab;
