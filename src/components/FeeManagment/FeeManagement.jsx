import React, { useState } from "react";
import { FaArrowUp, FaCalendar, FaRegEdit } from "react-icons/fa";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { TbPointFilled } from "react-icons/tb";
import AddNewFee from "./AddNewFee";

const FeeManagement = () => {
  const [addFeePopup, setAddFeePopup] = useState(false);
  function handlePopup() {
    setAddFeePopup(!addFeePopup);
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Fee Management</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handlePopup}
        >
          Add New Fee
        </button>
      </header>

      {/* Content */}
      <div className="flex gap-5">
        {/* Project Section */}
        <div className="bg-white shadow-md rounded-lg p-4 w-1/5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-gray-500">Project Number</h3>
              <p className="text-md text-gray-900">PN0001245</p>
            </div>
            <button className="text-gray-900 hover:text-gray-700">
              <FaRegEdit size={20} />
            </button>
          </div>

          <h3 className="text-md font-bold">Description</h3>
          <p className="text-gray-700 mb-5">
            App for maintaining your medical record, making appointments with a
            doctor, storing prescriptions
          </p>

          <h3 className="text-gray-500 text-md">Reporter</h3>
          <div className="flex items-center mb-5">
            <img
              src="/reporter-avatar.png"
              alt="Reporter Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-700">Evan Yates</span>
          </div>

          <h3 className="text-gray-500 text-md">Assignees</h3>
          <div className="flex items-center mb-5">
            <img
              src="/assignee-avatar1.png"
              alt="Assignee 1"
              className="w-8 h-8 rounded-full mr-2"
            />
            <img
              src="/assignee-avatar2.png"
              alt="Assignee 2"
              className="w-8 h-8 rounded-full mr-2"
            />
            <img
              src="/assignee-avatar3.png"
              alt="Assignee 3"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-700">+2</span>
          </div>

          <h3 className="text-gray-500 text-md">Priority</h3>
          <div className="flex items-center mb-5 gap-2">
            <FaArrowUp className="text-yellow-500" />
            <span className="text-yellow-500 font-bold">Medium</span>
          </div>

          <h3 className="text-gray-500 text-md">Deadline</h3>
          <div className="flex items-center mb-5">
            <span className="text-gray-700 font-bold">Feb 23, 2020</span>
          </div>

          <div className="flex items-center mb-2 gap-3">
            <FaCalendar className="text-gray-500" />
            <span className="text-gray-700">Created May 28, 2020</span>
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-4 w-4/5">
          {/* Course Card 1 */}
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold ">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>

          {/* Repeat the card as needed with the same gap adjustment */}
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold ">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>

          {/* Repeat other cards as needed */}
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
            {/* Left Section: Course Info */}
            <div className="flex items-center gap-3">
              <TbPointFilled className="text-blue-500 text-xl" />
              <div>
                <h3 className="text-lg font-bold">Department </h3>
                <p className="text-sm text-gray-500">Department Name</p>
              </div>
            </div>

            {/* Middle Section: Course Details */}
            <div className="flex gap-20 text-center">
              {" "}
              {/* Increased gap */}
              <div>
                <div className="text-sm text-gray-500">Course</div>
                <div className="text-sm font-semibold">Course Name</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Session</div>
                <div className="text-sm font-semibold">2019-2020</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="text-sm font-semibold">10</div>
              </div>
            </div>

            {/* Right Section: Program and Status */}
            <div className="flex items-center gap-16">
              {/* <div className="px-3 py-1 border rounded-lg text-sm font-semibold ">
                                B.Tech
                            </div> */}
              <div className="px-3 py-1 bg-green-400 text-white rounded-md text-sm">
                1000000
              </div>
              <PiDotsThreeVerticalBold className="text-gray-500 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <a href="#" className="px-4 py-2 text-black hover:underline">
          &laquo;
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          1
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          2
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          3
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          4
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          5
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          6
        </a>
        <a href="#" className="px-4 py-2 text-black hover:underline">
          &raquo;
        </a>
      </div>
      {addFeePopup ? <AddNewFee /> : null}
    </div>
  );
};

export default FeeManagement;
