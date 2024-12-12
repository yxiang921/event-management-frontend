import { Menu, Search, Bell } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  return (
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
  );
};

export default Header;
