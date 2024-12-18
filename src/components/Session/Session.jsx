import React, { useState } from "react";
import AddSession from "./AddSession"; // Import the AddSession component
import StudentCard from "./StudentCard";

const Session = () => {
  const [showAddSession, setShowAddSession] = useState(false); // State to toggle AddSession component

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Session</h1>
        <button
          onClick={() => setShowAddSession(true)} // Show AddSession on button click
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add New Session
        </button>
      </header>

      {/* Student Cards */}
      <div className="space-y-4">
        <StudentCard />
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center mt-6">
        <a href="#" className="px-4 py-2 text-black no-underline">
          &laquo;
        </a>
        <a href="#" className="px-4 py-2 text-black no-underline">
          1
        </a>
        <a href="#" className="px-4 py-2 text-black no-underline">
          2
        </a>
        <a href="#" className="px-4 py-2 text-black no-underline">
          3
        </a>
        <a href="#" className="px-4 py-2 text-black no-underline">
          4
        </a>
        <a href="#" className="px-4 py-2 text-black no-underline">
          &raquo;
        </a>
      </div>

      {/* AddSession Popup */}
      {showAddSession && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-4/12">
            <AddSession onClose={() => setShowAddSession(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
