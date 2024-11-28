import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div id="login">
        <div className="blue-bg">
          <img
            src={require("../images/Illustration.jpg")}
            className="sign-in-img"
          />
        </div>
        <div className="sign-in">
          <h3>Sign In</h3>
          <div className="group">
            <label>Email Address</label>
            <input type="text" placeholder="youreamil@gmail.com" />
          </div>
          <div className="group">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="remember-group">
            <div>
              <input type="checkbox" className="remember-check" />
              <span>Remember</span>
            </div>
            <div>
              <Link>Forget Password?</Link>
            </div>
          </div>
          <div className="sign-in-btn">
            <button>
              Sign In <PiArrowRightLight />
            </button>
          </div>
          <div className="support-and-team">
            <Link>Support & Tickets</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
