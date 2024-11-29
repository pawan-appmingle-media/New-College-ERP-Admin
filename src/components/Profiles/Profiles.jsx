import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-[64%]">
      <div className="flex justify-between items-center">
        <h2 className="text-center text-lg font-semibold mb-5">Login</h2>
        <Link className="text-blue-600 flex items-center">
          View All <MdKeyboardArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#f4f9fd] rounded-3xl p-5 flex flex-col items-center justify-center"
            >
              <img
                src={require("../images/admin-pro.jpg")}
                alt=""
                className="w-24 h-24 p-1 rounded-full border-4 border-blue-400 bg-white mb-3"
              />
              <p className="text-center text-sm font-medium">Student</p>
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
