import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const navigate = useNavigate();
  const profileImgSrc = require("../images/profile.jpg");
  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/course/add-course")} // Navigate to the "Add New Course" page
        >
          + Add New Courses
        </button>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {/* Course Card 1 */}
        <div className="bg-white p-4 rounded-3xl shadow flex justify-between items-center">
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
              <h3 className="text-lg font-bold">Amit</h3>
              <p className="text-sm text-gray-500">dummy@gmail.com</p>
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
                <span className="font-semibold">BCA</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Session</div>
                <span className="font-semibold">2025</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Batch</div>
                <span className="font-semibold">2024</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Students</div>
                <span className="font-semibold">Amit</span>
              </div>
            </div>
            <span className="border border-gray-500 text-gray-500 text-sm font-medium px-3 py-1 mt-5 rounded-lg">
              588
            </span>
            <span className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-lg">
              Draft
            </span>
            <PiDotsThreeVerticalBold className="text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
