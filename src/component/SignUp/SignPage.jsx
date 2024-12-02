import React from "react";
import "./SignPage.css";
import { useState } from "react";

import { CrossIcon } from "../../Helper/Icon";

function SignPage({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="Login-popup">
      <form className="login-popup-container">
        {/* <div className="login-popup-titel d-flex
        ">
         <span> </span>
          <span className="d-flex justify-content-end">cross</span>
        </div> */}
        <div className="container">
          <div className="row d-flex ">
            <div className="col-md-6"><h2>{currState}</h2></div>
            <div  className="col-md-6 d-flex justify-content-end">cross</div>
          </div>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <div>
              <input
                className="my-2 mx-1 w-100"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                className="my-2 mx-1 w-100"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
          ) : (
            <div>
              <input
                className="my-2 mx-1 w-100"
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <input
                className="my-2 mx-1 w-100"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                className="my-2 mx-1 w-100"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>
          )}
        </div>
        <button tyep='submit' onClick={(e)=>{
e.preventDefault()

        }} className="Sign_button">
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
