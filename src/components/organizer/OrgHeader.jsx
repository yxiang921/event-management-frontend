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
            onClick={() => setActiveTab("eventList")}
            className={`py-4 px-1 border-b-2 ${
              activeTab === "eventList"
                ? "border-primary-900 text-primary-900"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            Events
          </button>
        </nav>
      </div>
    </header>
  );
};

export default OrgHeader;
