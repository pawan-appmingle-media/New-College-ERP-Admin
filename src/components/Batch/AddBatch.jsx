import React from "react";
import { RxCross2 } from "react-icons/rx";

const AddBatch = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Batch added");
    onClose(); // Close popup after submission
  };

  return (
    <div className="relative">
      {/* Close Button */}

      <RxCross2 onClick={onClose} className="absolute right-5 cursor-pointer" />
      <h2 className="text-xl font-bold mb-4">Add New Batch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Batch Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter batch name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Session
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter session"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Courses
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter number of courses"
            required
          />
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Batch
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBatch;
