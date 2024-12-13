import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import {
  Contact,
  EventDetail,
  EventRegister,
  MyEvents,
  Profile,
  Home,

  // Admin
  AdminEvents,
  AdminEventDetail,
  Dashboard,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
import Header from "./components/admin/Header";
import { useSidebar } from "./context/SidebarContext";
const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event-register" element={<EventRegister />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/event/:id" element={<AdminEventDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
