import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import {
  PiDotsThreeVerticalBold,
  PiMicrosoftExcelLogoFill,
} from "react-icons/pi";

const AllStudentList = () => {
  const students = [
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      course: "B.Tech",
      session: "2023-2027",
      batch: "A1",
      enrollmentNo: "BT2023001",
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@gmail.com",
      course: "MCA",
      session: "2022-2024",
      batch: "M2",
      enrollmentNo: "MC2022005",
    },
    {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@gmail.com",
      course: "MBA",
      session: "2023-2025",
      batch: "B3",
      enrollmentNo: "MB2023009",
    },
    {
      name: "Sneha Gupta",
      email: "sneha.gupta@gmail.com",
      course: "BBA",
      session: "2021-2025",
      batch: "C1",
      enrollmentNo: "BB2021003",
    },
  ];

  const handleAddStudent = () => {
    console.log("Add New Student Button Clicked");
  };

  const handleDownloadExcel = () => {
    console.log("Download Excel Sheet Button Clicked");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <div className="text-gray-500 text-sm">
            Powered by AppMingle Media
          </div>
          <h1 className="text-2xl font-bold text-gray-900">All Students</h1>
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

      {/* Action Buttons */}
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={handleDownloadExcel}
          className="bg-green-200 hover:bg-green-400 text-[03552D] px-4 py-2 rounded-lg font-medium flex items-center mr-4"
        >
          <PiMicrosoftExcelLogoFill /> Download Excel
        </button>
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add New Student
        </button>
      </div>

      {/* Main Content Section */}
      <main className="space-y-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
          >
            {/* Student Info */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Student"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
            </div>

            {/* Student Details */}
            <div className="grid grid-cols-3 gap-6 text-center max-w-screen-sm max-w-full">
              <div>
                <div className="text-gray-500 text-sm">Course</div>
                <span className="font-semibold">{student.course}</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Session</div>
                <span className="font-semibold">{student.session}</span>
              </div>
              <div>
                <div className="text-gray-500 text-sm">Batch</div>
                <span className="font-semibold">{student.batch}</span>
              </div>
            </div>

            {/* Enrollment & Actions */}
            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                {student.enrollmentNo}
              </span>
              <PiDotsThreeVerticalBold className="text-gray-500 text-xl cursor-pointer" />
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4">
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
            10
          </span>
        </div>
      </main>
    </div>
  );
};

export default AllStudentList;
