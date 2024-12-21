import React from "react";
import "./SignPage.css";
import { useForm } from "react-hook-form";
import axios from 'axios'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross1 } from "react-icons/rx";
import { setShowLogin, setLogout, setSignUp } from "../../RTK/slices";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function SignPage() {
  const [currState, setCurrState] = useState("Login");
  const dispatch = useDispatch();

  // const showLogin = useSelector((state) => state.manageLoginStatus.showLogin);
  // console.log(showLogin);
  async function  handleButton(data) {
    toast("login Successfully");
    await axios.post('http://localhost:8000/Home',data).then(()=>{
      console.log('data successfully post on server');
      
    }).catch((e)=>{
console.log('error on the send data to server : ',e);

    })
    dispatch(setShowLogin(false));
    dispatch(setLogout());
  
 
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="Login-popup">
      <form
        onSubmit={handleSubmit(handleButton)}
        className="login-popup-container d-flex flex-column align-items-center justify-content-center align-self-center"
      >
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
            <div className="col-6 d-flex justify-content-end">
              <span
                onClick={() => {
                  dispatch(setShowLogin(false));
                }}
              >
                <RxCross1 />
              </span>
            </div>
          </div>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <div>
              <input
                className="my-2 mx-1 "
                placeholder="Enter Your Email"
                {...register("username", { required: true, type: "email" })}
              />
              <input
                className="my-2 mx-1 "
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: true,
                  minLength: { value: 8, message: "minimum length is 8" },
                  maxLength: { value: 9, message: "maximumn lentgh is 9" },
                })}
              />{" "}
              {errors.password && <div className="ms-5" style={{color:'red'}}>{errors.password.message}</div>}
            </div>
          ) : (
            <div>
              <input
                className="my-2 mx-1 "
                type="text"
                placeholder="Enter Your Name"
                {...register("username", { required: true })}
              />
              <input
                className="my-2 mx-1 "
                placeholder="Enter Your Email"
                {...register("email", { required: true, type: "email" })}
              />
              <input
                className="my-2 mx-1 "
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: true,
                  minLength: { value: 8, message: "minimum length is 8" },
                  maxLength: { value: 9, message: "maximum length is 9" },
                })}
              />
              {errors.password && <div>{errors.password.message}</div>}
            </div>
          )}
        </div>
        <button type="submit" className="Sign_button">
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
