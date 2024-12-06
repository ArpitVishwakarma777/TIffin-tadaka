import React from "react";
import "./SignPage.css";
import { RxCross1 } from "react-icons/rx";
import { setShowLogin } from "../../RTK/slices";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function SignPage() {
  const [currState, setCurrState] = useState("Login");
   const dispatch = useDispatch();
  // const showLogin = useSelector((state) => state.manageLoginStatus.showLogin);
  // console.log(showLogin);
  return (
    <div className="Login-popup">
      <form  className="login-popup-container d-flex flex-column align-items-center justify-content-center align-self-center">
        {/* <div className="login-popup-titel d-flex
        ">
         <span> </span>
          <span className="d-flex justify-content-end">cross</span>
        </div> */}
        <div className="container">
          <div className="row d-flex ">
            <div className="col-6 ">
              <h2>{currState}</h2>
            </div>
            <div className="col-6 d-flex justify-content-end"><span onClick={()=>{
         dispatch(setShowLogin(false))
              
            }}><RxCross1 /></span></div>
          </div>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <div>
              <input
                className="my-2 mx-1 "
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                className="my-2 mx-1 "
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
          ) : (
            <div>
              <input
                className="my-2 mx-1 "
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <input
                className="my-2 mx-1 "
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                className="my-2 mx-1 "
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
          )}
        </div>
        <button
          tyep="submit"
          onClick={(e) => {
            
          }}
          className="Sign_button"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condtation">
          <input type="checkbox" required />
          <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default SignPage;
