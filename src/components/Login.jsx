import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import LoginPageSVG from "./images/LoginPageSVG";

const Login = ({ setIsPopupOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex justify-center items-center">
        <div className="flex w-[888px] h-[600px] rounded-lg bg-white shadow-lg overflow-hidden">
          {/* Left Blue Background */}
          <div className="bg-blue-500 w-1/2 flex justify-center items-center">
            <LoginPageSVG className="w-[250px] h-auto" />
          </div>

          {/* Right Sign-in Form */}
          <div className="relative w-1/2 bg-white p-6 flex flex-col justify-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className=" absolute top-0 right-1 text-gray-600 hover:text-black z-100 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-gray-700">Sign In</h3>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="text"
                placeholder="youremail@gmail.com"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-500 text-sm">Remember</span>
              </div>
              <Link
                to="#"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <div className="text-center">
              <button className="w-full h-12 bg-blue-500 text-white text-lg font-bold rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                Sign In <PiArrowRightLight className="ml-2" />
              </button>
            </div>

            {/* Support & Tickets */}
            <div className="text-center mt-4">
              <Link
                to="#"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Support & Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
