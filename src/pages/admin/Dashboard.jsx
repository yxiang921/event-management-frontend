import { useState } from "react";
import {
  Calendar,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  Plus,
  MoreVertical,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

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
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-primary-900 text-white transition-transform duration-300 ease-in-out w-64 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">EventManager</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8">
          {[
            { name: "Dashboard", icon: BarChart3, id: "dashboard" },
            { name: "Events", icon: Calendar, id: "events" },
            { name: "Attendees", icon: Users, id: "attendees" },
            { name: "Settings", icon: Settings, id: "settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors duration-200
                ${activeTab === item.id ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden"
              >
                <Menu size={24} />
              </button>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200">
                <img
                  className="w-full h-full rounded-full"
                  src="https://picsum.photos/200/200"
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
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
                        <div className="text-sm text-gray-500">
                          {event.date}
                        </div>
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
    </div>
  );
};

export default Dashboard;
