import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div id="header-main-wrapper">
        <header className="flex justify-between items-center mb-6">
          <div>
            <div className="text-gray-500 text-sm">
              Powered by AppMingle Media
            </div>
            {/* <h1 className="text-2xl font-bold text-gray-900">All Students</h1> */}
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-gray-100 p-2 rounded-lg">
              <FaRegCalendar className="text-gray-500 mr-2" />
              <span className="text-sm font-semibold">Today</span>
            </div>
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow">
              <CiBellOn className="text-gray-500 text-xl" />
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="College Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold text-gray-700">College Name</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
