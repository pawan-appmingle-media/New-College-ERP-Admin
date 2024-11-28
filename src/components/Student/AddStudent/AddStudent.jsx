import { useState } from "react";
import "./AddStudent.css";

const AddStudent = () => {
  const [selectedGender, setSelectedGender] = useState();

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <>
      <div className="scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="add-student-form p-6 relative w-[700px] h-[600px] overflow-y-auto">
          <h2 className="font-semibold mb-4">Add New Student</h2>
          <form>
            <div className="add-student-form-group">
              <label>Department</label>
              <select>
                <option value="">Select Department</option>
              </select>
            </div>
            <div className="add-student-form-group">
              <label>Course</label>
              <select>
                <option value="">Select Course</option>
              </select>
            </div>
            <div className="add-student-form-group">
              <label>Session</label>
              <select>
                <option value="">Select Session</option>
              </select>
            </div>
            <div className="add-student-form-group">
              <label>Batch</label>
              <select>
                <option value="">Select Batch</option>
              </select>
            </div>
            <div className="add-student-form-group">
              <label>Student Name</label>
              <input type="text" placeholder="Enter Student Name" />
            </div>
            <div className="add-student-form-group">
              <label>Father's Name</label>
              <input type="text" placeholder="Enter Father's Name" />
            </div>
            <div className="add-student-form-group">
              <label>Mother Name</label>
              <input type="text" placeholder="Enter Mother Name" />
            </div>
            <div className="add-student-form-group">
              <label>Student Email</label>
              <input type="text" placeholder="Enter Student Email" />
            </div>
            <div className="add-student-form-group">
              <label>Student Contact</label>
              <input type="text" placeholder="Enter Student Contact" />
            </div>
            <div className="add-student-form-group">
              <label>Student Alternate Contact</label>
              <input
                type="text"
                placeholder="Enter Student Alternate Contact"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              {/* dob  */}
              <div className="add-student-form-group w-1/3">
                <label>DOB</label>
                <input type="date" />
              </div>
              {/* gender  */}
              <div className="add-student-form-group flex flex-col gap-2 w-2/3">
                <label className="text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="flex gap-3">
                  {["Male", "Female", "Other"].map((gender) => (
                    <button
                      key={gender}
                      type="button" // Prevents the button from acting as a submit button
                      onClick={() => handleSelect(gender)}
                      className={`px-12 p-2 rounded focus:outline-none text-xs font-semibold
              ${
                selectedGender === gender
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-2 border-grey-500 text-green-500 bg-transparent"
              }`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="add-student-form-group w-1/2">
                <label>Category</label>
                <input type="text" placeholder="Enter Category" />
              </div>
              <div className="add-student-form-group w-1/2">
                <label>Religion</label>
                <input type="text" placeholder="Enter Religion" />
              </div>
            </div>

            {/* Address Selction  */}
            <div id="address-main-container">
              <div className="address-box">
                <div className="add-student-form-group">
                  <label>Address 1</label>
                  <input type="text" placeholder="Enter Address 1" />
                </div>
                <div className="add-student-form-group">
                  <label>Address 2</label>
                  <input type="text" placeholder="Enter Address 2" />
                </div>
                <div className="add-student-form-group">
                  <label>Address 3</label>
                  <input type="text" placeholder="Enter Address 3" />
                </div>
              </div>

              <div className="state-city-pincode flex gap-4">
                <div className="add-student-form-group w-1/3">
                  <label>State</label>
                  <input type="text" placeholder="Enter State" />
                </div>
                <div className="add-student-form-group w-1/3">
                  <label>City</label>
                  <input type="text" placeholder="Enter City" />
                </div>
                <div className="add-student-form-group w-1/3">
                  <label>Pincode</label>
                  <input type="text" placeholder="Enter Pincode or ZIP code" />
                </div>
              </div>
            </div>

            <div id="correspond-address-main-container">
              <div className="correspon-address-box">
                <div className="add-student-form-group">
                  <label>Address 1</label>
                  <input type="text" placeholder="Enter Address 1" />
                </div>
                <div className="add-student-form-group">
                  <label>Address 2</label>
                  <input type="text" placeholder="Enter Address 2" />
                </div>
                <div className="add-student-form-group">
                  <label>Address 3</label>
                  <input type="text" placeholder="Enter Address 3" />
                </div>
              </div>
              {/* state,city,pincode  */}
              <div className="state-city-pincode flex gap-4">
                <div className="add-student-form-group w-1/3">
                  <label>State</label>
                  <input type="text" placeholder="Enter State" />
                </div>
                <div className="add-student-form-group w-1/3">
                  <label>City</label>
                  <input type="text" placeholder="Enter City" />
                </div>
                <div className="add-student-form-group w-1/3">
                  <label>Pincode</label>
                  <input type="text" placeholder="Enter Pincode or ZIP code" />
                </div>
              </div>
            </div>

            {/* Admission Details  */}

            {/* addmission-date, enrollment, roll-no.  */}
            <div className="admission flex gap-4">
              <div className="add-student-form-group w-1/3">
                <label>Admission Date</label>
                <input type="date" />
              </div>
              <div className="add-student-form-group w-1/3">
                <label>Admission/Enrollment Number</label>
                <input type="text" placeholder="Enter Enrollment Number" />
              </div>
              <div className="add-student-form-group w-1/3">
                <label>Roll Number</label>
                <input type="text" placeholder="Enter Roll Number" />
              </div>
            </div>
            {/* aadhar, pancard details */}
            <div className="flex gap-4">
              <div className="add-student-form-group w-1/2">
                <label>Aadhar Number</label>
                <input type="text" placeholder="Enter Aadhar Number" />
              </div>
              <div className="add-student-form-group w-1/2">
                <label>PAN Number</label>
                <input type="text" placeholder="Enter PAN Number" />
              </div>
            </div>

            {/* Education Details  */}
            <div className="class10th-details">
              <div className="mt-6">
                <span className="class-10th-stiker text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Class 10th
                </span>
                <div className="add-student-form-group">
                  <label>Qualification</label>
                  <input type="text" placeholder="Enter Qualification" />
                </div>
                <div className="add-student-form-group">
                  <label>Board/University Name</label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                  />
                </div>
              </div>
              {/* year, marks subject  */}
              <div className="year-marks-subject flex gap-4">
                <div className="add-student-form-group w-1/4">
                  <label>Year</label>
                  <input type="text" placeholder="Enter Year" />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Marks</label>
                  <input type="text" placeholder="Enter MM." />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Obtained</label>
                  <input type="text" placeholder="Enter MO." />
                </div>
                <div className="add-student-form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            {/* class 12th details  */}
            <div className="class12th-details">
              <div className="mt-6">
                <span className="class-10th-stiker text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Class 12th
                </span>
                <div className="add-student-form-group">
                  <label>Qualification</label>
                  <input type="text" placeholder="Enter Qualification" />
                </div>
                <div className="add-student-form-group">
                  <label>Board/University Name</label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                  />
                </div>
              </div>
              {/* year, marks subject  */}
              <div className="year-marks-subject flex gap-4">
                <div className="add-student-form-group w-1/4">
                  <label>Year</label>
                  <input type="text" placeholder="Enter Year" />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Marks</label>
                  <input type="text" placeholder="Enter MM." />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Obtained</label>
                  <input type="text" placeholder="Enter MO." />
                </div>
                <div className="add-student-form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            {/* Graduation details  */}
            <div className="class12th-details">
              <div className="mt-6">
                <span className="class-10th-stiker text-xs bg-[#00579C] px-8 py-2 text-white rounded-2xl">
                  Graduation
                </span>
                <div className="add-student-form-group">
                  <label>Qualification</label>
                  <input type="text" placeholder="Enter Qualification" />
                </div>
                <div className="add-student-form-group">
                  <label>Board/University Name</label>
                  <input
                    type="text"
                    placeholder="Enter Board/University Name"
                  />
                </div>
              </div>
              {/* year, marks subject  */}
              <div className="year-marks-subject flex gap-4">
                <div className="add-student-form-group w-1/4">
                  <label>Year</label>
                  <input type="text" placeholder="Enter Year" />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Marks</label>
                  <input type="text" placeholder="Enter MM." />
                </div>
                <div className="add-student-form-group">
                  <label>Maximum Obtained</label>
                  <input type="text" placeholder="Enter MO." />
                </div>
                <div className="add-student-form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter Subject" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-500 py-2 px-4 rounded-lg mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
