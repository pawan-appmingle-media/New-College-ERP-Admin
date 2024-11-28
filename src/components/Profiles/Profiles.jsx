import React from "react";

const Profiles = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-[768px] h-[500px] mx-auto">
      <h2 className="text-center text-lg font-semibold mb-5">Login</h2>
      <div className="grid grid-cols-3 gap-5">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-5 flex flex-col items-center justify-center"
            >
              <img
                src=""
                alt=""
                className="w-24 h-24 rounded-full border-2 border-gray-400 bg-pink-200 mb-3"
              />
              <p className="text-center text-sm font-medium">Admission</p>
              <p className="text-center text-xs text-gray-500">
                UI/UX Designer
              </p>
              <button className="mt-3 px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-600 hover:text-white">
                Login
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profiles;
