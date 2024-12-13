/* eslint-disable react/prop-types */
import { Download, Share2, Mail } from "lucide-react";

const EventAttendeesTab = ({ event }) => {
  return (
    <div className="space-y-6">
      {/* Attendee Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total Registrations</p>
          <p className="text-2xl font-semibold mt-1">123</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Confirmed</p>
          <p className="text-2xl font-semibold mt-1">
            123
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-semibold mt-1">
            123
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
  );
};

export default EventAttendeesTab;
