import { Menu, Bell, Search } from "lucide-react";
import Home from "../../components/admin/Home";
import { Sidebar } from "../../components";
import { useSidebar } from "../../context/SidebarContext";

const Dashboard = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
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

        <Home events={events} />
      </div>
    </div>
  );
};

export default Dashboard;
