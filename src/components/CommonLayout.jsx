import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

const CommonLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-100 px-4 py-2 overflow-y-auto">
        <div className="flex flex-col">
          <Header></Header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
