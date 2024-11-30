import React, { useState } from "react";
import {
  PiDotsThreeVerticalBold,
  PiMicrosoftExcelLogoFill,
} from "react-icons/pi";
import AddStudent from "../AddStudent/AddStudent.jsx"; // Import your AddStudent component

const AllStudentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const students = [
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      course: "B.Tech",
      session: "2023-2027",
      batch: "A1",
      enrollmentNo: "BT2023001",
    },
    // Other students here...
  ];

  const handleAddStudent = () => {
    setIsModalOpen(true);
    // Lock background scrolling
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset background scrolling
    document.body.style.overflow = "auto";
  };

  const handleDownloadExcel = () => {
    console.log("Download Excel Sheet Button Clicked");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Student</h1>
        <div className="flex">
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

      {/* Modal for AddStudent */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 rounded-lg shadow-lg w-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-2 text-gray-500 bg-gray-100 px-1 rounded-md hover:text-gray-700"
            >
              ✖
            </button>
            {/* Modal Content */}
            <AddStudent />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStudentList;
