/* eslint-disable react/prop-types */
import { CheckCircle, AlertCircle, MessageSquare } from "lucide-react";

const EventActivityTab = ({event }) => {
  return (
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
            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventActivityTab;
