import { Calendar, Users, BarChart3, Settings, X, LogOut } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const Sidebar = () => {
  const { setActiveTab, setIsSidebarOpen, activeTab, isSidebarOpen } =
    useSidebar();

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
          {
            name: "Users",
            icon: Users,
            id: "users",
            url: "/admin/users",
          },
          {
            name: "Organizers",
            icon: Users,
            id: "organizers",
            url: "/admin/organizers",
          },
          {
            name: "Analytics",
            icon: BarChart3,
            id: "analytics",
            url: "/admin/analytics",
          },
          {
            name: "Settings",
            icon: Settings,
            id: "settings",
            url: "/admin/settings",
          },
          {
            name: "Logout",
            icon: LogOut,
            id: "logout",
            url: "/",
          }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              window.location.href = item.url;
              console.log(`navigating to ${item.name}`);
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
