import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import {
  AdminEvents,
  Contact,
  Dashboard,
  EventDetail,
  EventRegister,
  MyEvents,
  Profile,
} from "./pages";
import { Footer, Navbar } from "./components";
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
  return (
    <>
      <Outlet />
    </>
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
      </Route>
    </Routes>
  );
}

export default App;
