import React from "react";

const AddDepartment = ({ onClose }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 w-3/4 max-w-lg mx-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 className="text-xl font-semibold text-center mb-6">
        Add New Department
      </h2>
      <form>
        {/* Department Image */}
        <div className="mb-6">
          <label
            htmlFor="department-image"
            className="block text-sm text-gray-600 mb-2"
          >
            Department Image
          </label>
          <input
            type="file"
            id="department-image"
            className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Department Name */}
        <div className="mb-6">
          <label
            htmlFor="department-name"
            className="block text-sm text-gray-600 mb-2"
          >
            Department Name
          </label>
          <input
            type="text"
            id="department-name"
            className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter department name"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm text-gray-600 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Add some description of the request"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDepartment;
