import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import { Contact, Dashboard, EventDetail, MyEvents, Profile } from "./pages";
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
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
