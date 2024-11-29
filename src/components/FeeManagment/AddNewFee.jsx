import React, { useState } from "react";

const AddNewFee = () => {
  const [lateFine, setLateFine] = useState(false);
  const [showSplitTotal, setShowSplitTotal] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 absolute top-0 left-0 bg-[whitesome] w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Add New Fee</h2>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        {/* Form */}
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Fee Name
              </label>
              <input
                type="text"
                placeholder="Eg. Academic Fee, Event, etc..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Department
              </label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option>Select Department</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Course</label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option>Select Course</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Session
              </label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option>Select Session</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Batch</label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option>Select Batch</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Total Fee
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Enter Total Amount"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="button"
                  onClick={() => setShowSplitTotal(true)}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                >
                  +Split
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  First Split Name
                </label>
                <input
                  type="text"
                  placeholder="First Semester"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter Total Amount"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Fine Per Day
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Enter amount per day"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="button"
                  className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                >
                  +Split
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Late Fine</span>
              <input
                type="checkbox"
                checked={lateFine}
                onChange={(e) => setLateFine(e.target.checked)}
                className="toggle-checkbox"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewFee;
