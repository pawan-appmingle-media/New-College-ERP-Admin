import React from "react";

const Logout = () => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white w-96 p-6 rounded-lg shadow-lg relative transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()} // Prevent closing on content click
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Are you sure you want to logout?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Make sure you've saved all your work before logging out.
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
