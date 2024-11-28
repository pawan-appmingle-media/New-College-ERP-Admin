import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const navigate = useNavigate();
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
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          {/* Left Section: Course Info */}
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Course"
            />
            <div>
              <h3 className="text-lg font-bold">Course Name</h3>
              <p className="text-sm text-gray-500">Info</p>
            </div>
          </div>

          {/* Middle Section: Course Details */}
          <div className="flex gap-12 text-center">
            {" "}
            {/* Increased gap */}
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Batch</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">12200</div>
            </div>
          </div>

          {/* Right Section: Program and Status */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
              Draft
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Repeat the card as needed with the same gap adjustment */}
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Course"
            />
            <div>
              <h3 className="text-lg font-bold">Course Name</h3>
              <p className="text-sm text-gray-500">Info</p>
            </div>
          </div>
          <div className="flex gap-12 text-center">
            {" "}
            {/* Increased gap */}
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Batch</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">12200</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
              Draft
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Repeat other cards as needed */}
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Course"
            />
            <div>
              <h3 className="text-lg font-bold">Course Name</h3>
              <p className="text-sm text-gray-500">Info</p>
            </div>
          </div>
          <div className="flex gap-12 text-center">
            {" "}
            {/* Increased gap */}
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Batch</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">12200</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
              Draft
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Course"
            />
            <div>
              <h3 className="text-lg font-bold">Course Name</h3>
              <p className="text-sm text-gray-500">Info</p>
            </div>
          </div>
          <div className="flex gap-12 text-center">
            {" "}
            {/* Increased gap */}
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Batch</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">12200</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
              Draft
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Course"
            />
            <div>
              <h3 className="text-lg font-bold">Course Name</h3>
              <p className="text-sm text-gray-500">Info</p>
            </div>
          </div>
          <div className="flex gap-12 text-center">
            {" "}
            {/* Increased gap */}
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Batch</div>
              <div className="text-sm font-semibold">10</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">12200</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
              Draft
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
