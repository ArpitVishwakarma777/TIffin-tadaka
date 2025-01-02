import React, { useCallback, useEffect, useState } from "react";
import "./SignPage.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross1 } from "react-icons/rx";
import { setShowLogin, setLogout, setUser } from "../../RTK/slices";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase";

function SignPage() {
  const [currState, setCurrState] = useState("Sign Up"); // "Login" or "Sign Up"
  const [userdata, setUserdata] = useState("null");
  const dispatch = useDispatch();
  // const [name, setName] = useState(null);
  // const [userId, setUserId] = useState(null);
  // const userdata = useSelector((state) => state.manageUserStatus.user);
  const handleSignUp = async (name, email, userId) => {
    try {
      await axios.post("http://localhost:8000/api/signUp", {
        name,
        email,
        userId,
      });
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };
  //get user data
  const handleLogin = async (uid) => {
    console.log(uid);

    try {
      const userData = await axios.get("http://localhost:8000/api/login", {
        params: { uid }, // Correctly passing uid as a query parameter
      });
      console.log(userData.data);
      const data = userData.data;
      dispatch(setUser(data));
      console.log(userData);
    } catch (error) {
      console.error("Error during login:", error); // Error handling
    }
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  // Firebase Auth
  const auth = getAuth(app);

  // Handle Login
  const signInUser = async (data) => {
    clearErrors(); // Clear previous errors

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential.user.uid);

      toast.success("Login Successful!");
      reset(); // Reset the form
      dispatch(setShowLogin(false)); // Close the login modal
      dispatch(setLogout()); // Update Redux state
      handleLogin(userCredential.user.uid);
    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/invalid-credential") {
        setError("signInError", { message: "Invalid email or password" });
      }
    }
  };

  // Handle Sign Up
  const signUpUser = async (data) => {
    clearErrors(); // Clear previous errors

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredential) {
        // console.log(userCredential);
        handleSignUp(data.name, data.email, userCredential.user.uid);
      }
      console.log("Account Created:", userCredential);
      toast.success("Account Created Successfully!");
      reset();
      dispatch(setShowLogin(false));
      // Update Redux state
      dispatch(setLogout());
      handleLogin(userCredential.user.uid);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("signUpError", {
          message: "An account with this email already exists",
        });
      } else {
        setError("signUpError", { message: "An unexpected error occurred" });
      }
    }
  };

  return (
    <div className="Login-popup">
      <form
        onSubmit={
          currState === "Login"
            ? handleSubmit(signInUser)
            : handleSubmit(signUpUser)
        }
        className="login-popup-container d-flex flex-column align-items-center justify-content-center"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-6 d-flex  justify-content-center">
              <h2 className="login-heading">
                {currState === "Login" ? "Login" : "Sign Up"}
              </h2>
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
          {currState === "Sign Up" && (
            <input
              className=" mx-1"
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
            />
          )}
          <input
            className=" mx-1"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is required" })}
            onInput={() => clearErrors()}
          />
          <input
            className=" mx-1"
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            onInput={() => clearErrors()}
          />
          {currState === "Sign Up" && errors.signUpError && (
            <div className="text-danger ms-4">{errors.signUpError.message}</div>
          )}
          {errors.name && (
            <div className="text-danger ms-4">{errors.name.message}</div>
          )}
          {errors.email && (
            <div className="text-danger ms-4">{errors.email.message}</div>
          )}
          {errors.password && (
            <div className="text-danger ms-4">{errors.password.message}</div>
          )}
          {errors.signInError && (
            <div className="text-danger ms-4">{errors.signInError.message}</div>
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
            Don't have an account?{" "}
            <span
              className="change-option"
              onClick={() => {
                setCurrState("Sign Up");
                reset();
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="change-option"
              onClick={() => {
                setCurrState("Login");
                reset();
              }}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default SignPage;
