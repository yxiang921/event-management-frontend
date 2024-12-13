/* eslint-disable react/prop-types */
const EventScheduleTab = ({ event }) => {
  return (
    <div className="space-y-6">
      {event?.schedule.map((item, index) => (
        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
          <div className="flex-shrink-0 w-24">
            <p className="text-sm font-medium text-gray-900">{item.time}</p>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">{item.activity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventScheduleTab;
