import React, { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import AddNewDepartment from "./AddDepartment"; // Import your AddNewDepartment component

const Department = () => {
  const profileImgSrc = require("../images/profile.jpg");
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
    <div className="bg-gray-100 min-h-screen">
      {/* Add Department Button */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">All Department</h1>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add New Department
        </button>
      </div>

      {/* Main Content Section */}
      <main className="space-y-2">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-3xl shadow flex justify-between items-center"
          >
            {/* User Info */}
            <div className="flex">
              <div>
                <img
                  src={profileImgSrc}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
              </div>
              <div className="name-email">
                <h3 className="text-lg font-bold">{dept.name}</h3>
                <p className="text-sm text-gray-500">{dept.email}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-[75%] mx-4">
              {/* 42 rounded  */}
              <div>
                <div className="text-xl text-blue-700 border border-2 border-right rounded-full w-10 h-10 text-center p-1 flex items-center justify-center">
                  42
                </div>
              </div>

              <div className="w-[40%] mx-10 flex justify-between">
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
              <span className="border border-gray-500 text-gray-500 text-sm font-medium px-3 py-1 mt-5 rounded-lg">
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
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-1/3">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-1 px-1 rounded-lg bg-gray-100 right-2 hover:text-gray-700"
            >
              ✖
            </button>
            {/* Modal Content */}
            <AddNewDepartment />
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
