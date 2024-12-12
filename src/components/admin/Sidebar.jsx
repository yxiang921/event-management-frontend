import { useState } from "react";
import { Calendar, Users, BarChart3, Settings, X } from "lucide-react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
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
          {
            name: "Dashboard",
            icon: BarChart3,
            id: "dashboard",
            url: "/admin",
          },
          {
            name: "Events",
            icon: Calendar,
            id: "events",
            url: "/admin/events",
          },
          { name: "Attendees", icon: Users, id: "attendees" },
          { name: "Settings", icon: Settings, id: "settings" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              window.location.href = item.url;
            }}
            className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors duration-200
                ${activeTab === item.id ? "bg-white/10" : "hover:bg-white/5"}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
