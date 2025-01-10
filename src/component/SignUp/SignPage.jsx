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
import { setShowLogin, setLogout, setUser, changeCart } from "../../RTK/slices";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase";

function SignPage() {
  const [currState, setCurrState] = useState("Sign Up"); // "Login" or "Sign Up"
  const [userdata, setUserdata] = useState("null");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async (name, email, userId) => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_URL}/api/signUp`, {
        name,
        email,
        userId,
      });
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const handleLogin = async (uid) => {
    try {
      const userData = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/login`,
        {
          params: { uid },
        }
      );
      const data = userData.data;
      {!data.name && toast.error("User data not found ")};
      dispatch(setUser(data));  
      dispatch(changeCart(data.addedCarts))
      // console.log("arpit ke cart : ",data.addedCarts);

      // dispatch(changeCart(data.addedCarts));
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const auth = getAuth(app);

  const signInUser = async (data) => {
    setIsLoading(true); // Start loading
    clearErrors();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Login Successful!");
      reset();
      dispatch(setShowLogin(false));
      dispatch(setLogout());
      console.log(userCredential);
      
      handleLogin(userCredential.user.uid);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("signInError", { message: "Invalid email or password" });
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const signUpUser = async (data) => {
    setIsLoading(true); // Start loading
    clearErrors();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredential) {
        handleSignUp(data.name, data.email, userCredential.user.uid);
      }
      toast.success("Account Created Successfully!");
      reset();
      dispatch(setShowLogin(false));
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
    } finally {
      setIsLoading(false); // Stop loading
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
            <div className="col-6 d-flex justify-content-center">
              <h2 className="login-heading">
                {currState === "Login" ? "Login" : "SignUp"}
              </h2>
            </div>
            <div className=" col-6 d-flex justify-content-end">
              <span
                className="cursor-pointer"
                onClick={() => dispatch(setShowLogin(false))}
              >
                <RxCross1 />
              </span>
            </div>
          </div>
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              className="mx-1"
              type="text"
              placeholder="Enter Your Name"
              autoComplete="off"
              {...register("name", { required: "Name is required" })}
            />
          )}
          <input
            autoComplete="off"
            className="mx-1"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is required" })}
            onInput={() => clearErrors()}
          />
          <input
            autoComplete="off"
            className="mx-1"
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
          {errors.signUpError && (
            <div className="text-danger">{errors.signUpError.message}</div>
          )}
          {errors.signInError && (
            <div className="text-danger">{errors.signInError.message}</div>
          )}
        </div>
        <div className="login-popup-condtation mt-1">
          <input autoComplete="off" type="checkbox" required />
          <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>
        <button type="submit" className="Sign_button" disabled={isLoading}>
          {isLoading
            ? "Processing..."
            : currState === "Sign Up"
            ? "Create Account"
            : "Login"}
        </button>

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
