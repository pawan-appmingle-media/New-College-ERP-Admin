import { useState } from "react";
import "./AddStudent.css";

const AddStudent = () => {
  const [selectedGender, setSelectedGender] = useState();

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <>
      <div className="custom-scrollbar overflow-y-auto h-[620px] w-[700px] px-6 mt-6">
        <div className="add-student-form">
          <h2 className="font-semibold mb-4">Add New Student</h2>
          <form>
            <div className="bg-white rounded-lg mx-auto my-5">
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Department
                </label>
                <select className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal">
                  <option value="">Select Department</option>
                </select>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Course
                </label>
                <select className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal">
                  <option value="">Select Course</option>
                </select>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Session
                </label>
                <select className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal">
                  <option value="">Select Session</option>
                </select>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Batch
                </label>
                <select className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal">
                  <option value="">Select Batch</option>
                </select>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Father's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Father's Name"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Mother Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Mother Name"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Student Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Email"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Student Contact
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Contact"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Student Alternate Contact
                </label>
                <input
                  type="text"
                  placeholder="Enter Student Alternate Contact"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex items-center justify-between gap-4 mt-4">
                {/* dob */}
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    DOB
                  </label>
                  <input
                    type="date"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                {/* gender */}
                <div className="flex flex-col gap-2 w-2/3">
                  <label className="text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="flex gap-3">
                    {["Male", "Female", "Other"].map((gender) => (
                      <button
                        key={gender}
                        type="button"
                        className={`px-4 py-2 rounded text-xs font-semibold border-2 transition ${
                          selectedGender === gender
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-gray-500 text-green-500 bg-transparent"
                        }`}
                        onClick={() => handleSelect(gender)}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Enter Religion"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
            </div>

            {/* Address Selection */}
            <div id="address-main-container" className="mt-4">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 1
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 1"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 2
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 2"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 3
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 3"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode or ZIP code"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
              </div>
            </div>

            <div id="correspond-address-main-container" className="mt-4">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 1
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 1"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 2
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 2"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Address 3
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address 3"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode or ZIP code"
                    className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                  />
                </div>
              </div>
            </div>

            {/* Admission Details */}
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col w-1/3">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Admission Date
                </label>
                <input
                  type="date"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Admission/Enrollment Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Enrollment Number"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Roll Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Aadhar Number"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-gray-600 mb-1 text-sm font-semibold">
                  PAN Number
                </label>
                <input
                  type="text"
                  placeholder="Enter PAN Number"
                  className="border border-[#d8e0f0] rounded-lg py-2 px-4 text-gray-600 shadow-sm text-sm font-normal"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg mx-auto mt-5">
              {/* Class 10th Details */}
              <div className="mt-6">
                <span className="text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Class 10th
                </span>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Qualification"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Board/University Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Year, Marks, and Subject */}
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col w-1/5">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Year"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Marks
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MM."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Obtained
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MO."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-[22%]">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* class 12th  */}
              <div className="mt-6">
                <span className="text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Class 12th
                </span>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Qualification"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Board/University Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Year, Marks, and Subject */}
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col w-1/5">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Year"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Marks
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MM."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Obtained
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MO."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-[22%]">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Graduation  */}
              <div className="mt-6">
                <span className="text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Graduation
                </span>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Qualification"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Board/University Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Year, Marks, and Subject */}
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col w-1/5">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Year"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Marks
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MM."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Maximum Obtained
                  </label>
                  <input
                    type="text"
                    placeholder="Enter MO."
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-[22%]">
                  <label className="text-gray-600 mb-1 text-sm font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="border border-gray-300 py-2 px-3 rounded-lg text-sm shadow-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
