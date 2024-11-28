import React, { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import AddBatch from "./AddBatch"; // Import the AddBatch component

const Batch = () => {
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Batches</h1>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setShowPopup(true)} // Open popup on click
        >
          + Add New Batch
        </button>
      </div>

      {/* Batch List */}
      <div className="space-y-4">
        {/* Sample Batch Card */}
        <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow">
          {/* Left Section: Batch Info */}
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/100"
              alt="Batch"
            />
            <div>
              <h3 className="text-lg font-bold">Batch Name</h3>
              <p className="text-sm text-gray-500">Details</p>
            </div>
          </div>

          {/* Middle Section: Batch Details */}
          <div className="flex gap-12 text-center">
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="text-sm font-semibold">Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Session</div>
              <div className="text-sm font-semibold">2023-2024</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Courses</div>
              <div className="text-sm font-semibold">8</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Students</div>
              <div className="text-sm font-semibold">250</div>
            </div>
          </div>

          {/* Right Section: Status and Actions */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
              B.Tech
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-500 rounded-md text-sm">
              Active
            </div>
            <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowPopup(false)} // Close popup on click
            >
              &times; {/* Close button */}
            </button>
            <AddBatch onClose={() => setShowPopup(false)} />{" "}
            {/* Pass onClose to AddBatch */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Batch;
