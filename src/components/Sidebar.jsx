import React from "react";
import {
  FaBook,
  FaBuilding,
  FaCalendarAlt,
  FaComments,
  FaInfoCircle,
  FaLayerGroup,
  FaUserGraduate,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/student", label: "Student", icon: <FaUserGraduate /> },
    { to: "/department", label: "Department", icon: <FaBuilding /> },
    { to: "/course", label: "Course", icon: <FaBook /> },
    { to: "/session", label: "Session", icon: <FaCalendarAlt /> },
    { to: "/batch", label: "Batch", icon: <FaLayerGroup /> },
    { to: "/chat", label: "Chat", icon: <FaComments /> },
    { to: "/info-portal", label: "Info Portal", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      <div className="p-4 text-center font-bold text-xl text-gray-700 border-b">
        Admin Panel
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-600 ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
