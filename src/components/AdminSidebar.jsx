import { useState } from "react";
// import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navigationLinks = [
//     {
//       path: "/admin/home",
//       label: "Dashboard",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//           />
//         </svg>
//       ),
//     },
//     {
//       path: "/admin/grievances",
//       label: "Grievances",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
//           />
//         </svg>
//       ),
//     },
    
//   ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="z-10 fixed inset-0 w-screen h-screen bg-slate-900 opacity-45"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`w-5/6 h-screen overflow-scroll no-scrollbar p-4 md:w-64 bg-white border-r border-gray-100 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:sticky left-0 top-0 z-[51]`}
      >
        <div className="p-4 relative">
          {/* User Profile */}
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://pics.craiyon.com/2023-07-02/9a4508b794e8480ab55e484905e31b23.webp"
              alt="Profile Pic"
              className="rounded-full w-20 h-20 mb-4"
            />
            <p className="text-lg font-semibold text-center">YX</p>
            <p className="text-gray-500">yx@gmail.com</p>
          </div>

          {/* Close Button */}
          <div
            className="cursor-pointer w-8 h-8 absolute top-4 right-4 md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 w-full flex flex-col items-center justify-center">
          {/* {navigationLinks.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                `w-full h-10 mt-2 flex items-center rounded-lg px-4 py-2 ${
                  isActive ? "active" : "unactive"
                }`
              }
            >
              {link.icon}
              <span className="ml-3 text-sm font-medium">{link.label}</span>
            </NavLink>
          ))} */}
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
