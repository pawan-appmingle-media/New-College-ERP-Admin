import React from "react";
import { FaClock } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const UpcommingHoliday = () => {
  return (
    <>
      <div className="holiday bg-white border rounded-2xl p-4">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mb-4 text-2xl font-medium">Upcomming Holiday</h1>
          <Link className="text-blue-600 flex items-center mb-3">
            View All <MdKeyboardArrowRight />
          </Link>
        </div>
        {/* card  */}
        <div className="holiday-card border-l-4 border-blue-500 p-4 m-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium w-1/2">
              Presentation of the new department
            </p>
            <FaArrowUpLong className="text-yellow-500" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Today | 5:00 PM </p>
            <p className="flex items-center justify-evenly gap-2 bg-gray-100 py-1 px-5 rounded-md">
              <FaClock className="text-gray-500 bg-white rounded-full" />
              <span className="text-gray-500">4h</span>
            </p>
          </div>
        </div>
        {/* card  */}
        <div className="holiday-card border-l-4 border-blue-500 p-4 m-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium w-1/2">
              Presentation of the new department
            </p>
            <FaArrowUpLong className="text-yellow-500" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Today | 5:00 PM </p>
            <p className="flex items-center justify-evenly gap-2 bg-gray-100 py-1 px-5 rounded-md">
              <FaClock className="text-gray-500 bg-white rounded-full" />
              <span className="text-gray-500">4h</span>
            </p>
          </div>
        </div>
        {/* card  */}
        <div className="holiday-card border-l-4 border-blue-500 p-4 m-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium w-1/2">
              Presentation of the new department
            </p>
            <FaArrowUpLong className="text-yellow-500" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Today | 5:00 PM </p>
            <p className="flex items-center justify-evenly gap-2 bg-gray-100 py-1 px-5 rounded-md">
              <FaClock className="text-gray-500 bg-white rounded-full" />
              <span className="text-gray-500">4h</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcommingHoliday;
