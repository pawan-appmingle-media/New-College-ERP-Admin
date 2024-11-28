import React from 'react';
import { FaDownload } from "react-icons/fa6";

const AddCourses = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Add New Courses</h2>
                    <button className="text-gray-500 hover:text-gray-700" aria-label="Close">
                        <span className="text-xl">&times;</span>
                    </button>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Department</label>
                        <select
                            name="department"
                            defaultValue=""
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Department</option>
                            <option>Computer Science</option>
                            <option>Mechanical Engineering</option>
                            <option>Civil Engineering</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Course Name</label>
                        <input
                            type="text"
                            placeholder="Enter course name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Department Image</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="departmentImage"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-12"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 hover:text-indigo-700"
                                aria-label="Download Template"
                            >
                                <FaDownload />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            placeholder="Enter Description"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mt-4 flex justify-center ">
                        <button
                            type="submit"
                            className="w-1/3  py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourses;
