import React, { useState } from "react";
import {
  FaBook,
  FaBuilding,
  FaCalendarAlt,
  FaComments,
  FaInfoCircle,
  FaLayerGroup,
  FaUserGraduate,
} from "react-icons/fa";
import { MdDashboard, MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import SupportSVG from "./images/SupportSVG.jsx";

const LogoutPopup = ({ onClose, onConfirm }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white w-96 p-6 rounded-lg shadow-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Confirm Logout
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Are you sure you want to log out?
      </p>
      <div className="flex justify-end gap-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (clear local storage, cookies, etc.)
    console.log("Admin logged out");
    setShowLogoutPopup(false);
    navigate("/"); // Redirect to login or home page
  };

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/student", label: "Student", icon: <FaUserGraduate /> },
    { to: "/department", label: "Department", icon: <FaBuilding /> },
    { to: "/course", label: "Course", icon: <FaBook /> },
    { to: "/session", label: "Session", icon: <FaCalendarAlt /> },
    { to: "/batch", label: "Batch", icon: <FaLayerGroup /> },
    { to: "/fee-management", label: "Fee Management", icon: <FaLayerGroup /> },
    { to: "/chat", label: "Chat", icon: <FaComments /> },
    { to: "/info-portal", label: "Info Portal", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      <div className="text-center font-bold text-xl text-gray-700">
        <img
          src={require("./images/erp-student-menu-icon.png")}
          alt="icon"
          width={"50px"}
          className="ml-8 mt-8 m-4"
        />
      </div>
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
        <ul className="space-y-2 px-4">
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
        <SupportSVG className="border" />
        <button
          onClick={() => setShowLogoutPopup(true)}
          className="flex items-center gap-4 px-4 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-600"
        >
          <span className="text-lg">
            <MdLogout />
          </span>
          <span>Logout</span>
        </button>
      </nav>
      {showLogoutPopup && (
        <LogoutPopup
          onClose={() => setShowLogoutPopup(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
};

export default Sidebar;
