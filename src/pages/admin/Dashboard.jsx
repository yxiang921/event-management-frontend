import { Plus, MoreVertical } from "lucide-react";

const Dashboard = () => {
  const events = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-12-15",
      attendees: 250,
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-12-20",
      attendees: 1000,
      status: "Planning",
    },
    {
      id: 3,
      name: "Corporate Workshop",
      date: "2024-12-10",
      attendees: 50,
      status: "Completed",
    },
    {
      id: 4,
      name: "Charity Gala",
      date: "2024-12-25",
      attendees: 150,
      status: "Upcoming",
    },
  ];

  const stats = [
    { title: "Total Events", value: "24", change: "+12%" },
    { title: "Total Attendees", value: "1,450", change: "+25%" },
    { title: "Revenue", value: "$45,000", change: "+18%" },
    { title: "Active Events", value: "8", change: "+5%" },
  ];

  return (
    <div>
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Events</h2>
              <button className="flex items-center space-x-2 bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors duration-200">
                <Plus size={20} />
                <span>Add Event</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendees
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {event.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{event.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {event.attendees}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${
                                event.status === "Upcoming"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : event.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button>
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
