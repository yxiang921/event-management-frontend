/* eslint-disable react/prop-types */
const EventScheduleTab = ({ event }) => {
  console.log(event.schedule);
  return (
    <div className="space-y-6">
      {event?.schedule.map((item, index) => (
        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
          <div className="flex-shrink-0 w-24">
            <p className="text-sm font-medium text-gray-900">
              {item.split("-")[0]}
            </p>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">{item.split("-")[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventScheduleTab;
