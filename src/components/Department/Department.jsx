import React, { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import AddNewDepartment from "./AddDepartment"; // Import your AddNewDepartment component

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    setIsModalOpen(false);
  };

  const departments = [
    {
      name: "Vikash Kumar",
      email: "evanyte@gmail.com",
      courses: 10,
      session: 10,
      batch: 10,
      students: 100,
      tag: "B.Tech",
    },
    {
      name: "Ananya Gupta",
      email: "ananya.gupta@gmail.com",
      courses: 12,
      session: 8,
      batch: 6,
      students: 90,
      tag: "MCA",
    },
    {
      name: "Rohit Sharma",
      email: "rohit.sharma@gmail.com",
      courses: 8,
      session: 10,
      batch: 7,
      students: 120,
      tag: "MBA",
    },
    {
      name: "Simran Kaur",
      email: "simran.kaur@gmail.com",
      courses: 15,
      session: 9,
      batch: 10,
      students: 110,
      tag: "BBA",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <div className="text-gray-500 text-sm">
            Powered by AppMingle Media
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Department</h1>
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

      {/* Add Department Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add New Department
        </button>
      </div>

      {/* Main Content Section */}
      <main className="space-y-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
          >
            {/* User Info */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{dept.name}</h3>
                <p className="text-sm text-gray-500">{dept.email}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 text-center max-w-screen-sm max-w-full">
              <div>
                <div className="text-gray-500 text-sm">Courses</div>
                <span className="font-semibold">{dept.courses}</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Session</div>
                <span className="font-semibold">{dept.session}</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Batch</div>
                <span className="font-semibold">{dept.batch}</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Students</div>
                <span className="font-semibold">{dept.students}</span>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                {dept.tag}
              </span>
              <span className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-lg">
                Draft
              </span>
              <PiDotsThreeVerticalBold className="text-gray-500 text-xl cursor-pointer" />
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">1</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            2
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            3
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            ...
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            67
          </span>
        </div>
      </main>

      {/* Modal for AddNewDepartment */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <button
            onClick={handleCloseModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          <AddNewDepartment />
        </div>
      )}
    </div>
  );
};

export default Department;