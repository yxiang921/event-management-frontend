import { Bell, ChevronDown } from "lucide-react";
import { useOrgHeader } from "../../context/OrgHeaderContext";

const OrgHeader = () => {
  const { activeTab, setActiveTab } = useOrgHeader();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Event Organizer</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 ${
              activeTab === "overview"
                ? "border-primary-900 text-primary-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("createEvent")}
            className={`py-4 px-1 border-b-2 ${
              activeTab === "createEvent"
                ? "border-primary-900 text-primary-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            Create Event
          </button>
          <button
            onClick={() => setActiveTab("myEvents")}
            className={`py-4 px-1 border-b-2 ${
              activeTab === "myEvents"
                ? "border-primary-900 text-primary-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            My Events
          </button>
          <button
            onClick={() => setActiveTab("attendees")}
            className={`py-4 px-1 border-b-2 ${
              activeTab === "attendees"
                ? "border-primary-900 text-primary-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            Attendees
          </button>
        </nav>
      </div>
    </header>
  );
};

export default OrgHeader;
