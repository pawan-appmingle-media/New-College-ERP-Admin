import React from "react";

const AddDepartment = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Department added");
    onClose(); // Close popup after submission
  };
  return (
    <div className="relative bg-white rounded-2xl">
      <h2 className="text-xl font-semibold text-center mb-6">
        Add New Department
      </h2>
      <form onSubmit={handleSubmit}>
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
