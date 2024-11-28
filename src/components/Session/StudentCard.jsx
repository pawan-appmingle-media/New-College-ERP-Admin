import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const StudentCard = ({
  name,
  email,
  gender,
  paymentBy,
  paymentType,
  rollNumber,
  program,
  balance,
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-3xl shadow">
      {/* Left Section: Student Info */}
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/100"
          alt={name}
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Middle Section: Details */}
      <div className="flex gap-16 text-center">
        <div>
          <div className="text-sm text-gray-500">Gender</div>
          <div className="text-sm font-semibold">{gender}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Payment Collected By</div>
          <div className="text-sm font-semibold">{paymentBy}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Payment Type</div>
          <div className="text-sm font-semibold">{paymentType}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Roll Number</div>
          <div className="text-sm font-semibold">{rollNumber}</div>
        </div>
      </div>

      {/* Right Section: Program and Balance */}
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 border rounded-lg text-sm font-semibold mt-5">
          {program}
        </div>
        <div className="px-3 py-1 bg-green-100 text-green-500 rounded-md text-sm">
          +{balance}
        </div>
        <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default StudentCard;
