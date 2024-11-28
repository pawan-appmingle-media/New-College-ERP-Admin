import React from "react";
import { RxCross2 } from "react-icons/rx";

const AddSession = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Session added");
    onClose(); // Close popup after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Close Button */}
      <div className="flex justify-end">
        <RxCross2
          onClick={onClose}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Add New Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Session Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter session name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
