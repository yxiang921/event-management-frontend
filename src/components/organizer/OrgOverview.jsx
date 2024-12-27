/* eslint-disable react/prop-types */

const OrgOverview = ({ events, getStatusIcon, getStatusColor }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Total Events</p>
            <p className="text-2xl font-bold">{events.length}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Pending Approval</p>
            <p className="text-2xl font-bold">
              {
                events.filter(
                  (event) => event.status.toLowerCase() == "pending"
                ).length
              }
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Total Attendees</p>
            <p className="text-2xl font-bold">
              {events
                .filter((event) => event.status.toLowerCase() == "approved")
                .reduce((acc, event) => acc + event.attendees.length, 0)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Events</h3>
        <div className="space-y-4">
          {events.slice(0, 3).map((event) => (
            <div
              key={event._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                {getStatusIcon(event.status)}
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {event.date.split("T")[0]} {event.time}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                  event.status
                )}`}
              >
                {event.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgOverview;
