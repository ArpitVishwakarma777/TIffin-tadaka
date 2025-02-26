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
import { setShowLogin, setLogout, setUser, changeCart, setSignUp } from "../../RTK/slices";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase";
import {  useNavigate } from "react-router-dom";

function SignPage() {
  const [currState, setCurrState] = useState("Sign Up"); // "Login" or "Sign Up"
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  const handleSignUp = async (name, email, userId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/signUp`,
        {
          name,
          email,
          userId,
        }
      );
      return res;
    } catch (error) {
      toast.error(error);
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

      dispatch(setUser(data));
      dispatch(changeCart(data.addedCarts));
      dispatch(setLogout());
    } catch (error) {
      toast.error(error);
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
      userCredential;
      toast.success("Login Successful!");
      reset();
      localStorage.setItem("userId", userCredential.user.uid);
      dispatch(setShowLogin(false));

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
        const name = data.name;

        const email = data.email;
        const userId = userCredential.user.uid;
        const res = await axios.post(
          `${import.meta.env.VITE_APP_URL}/api/signUp`,
          {
            name,
            email,
            userId,
          }
        );
        res && handleLogin(userId);
      }
      reset();
      localStorage.setItem("userId", userCredential.user.uid);
      dispatch(setShowLogin(false));
      toast.success("Account Created Successfully!");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("signUpError", {
          message: "An account with this email already exists",
        });
      } else {
        setError("signUpError", { message: "An unexpected error occurred" });
      }
    } finally {
      setIsLoading(false);
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
          <div className=" position-relative password-input-container">
            <input
              autoComplete="off"
              className="password-input mx-1"
              type={showPassword ? "text" : "password"}
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
            <button
              type="button"
              className="toggle-password-btn   cursor-pointer position-absolute"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.signUpError && (
            <div className="text-danger">{errors.signUpError.message}</div>
          )}
          {errors.signInError && (
            <div className="text-danger">{errors.signInError.message}</div>
          )}
        </div>
        <div className="login-popup-condtation mt-0">
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
          <>
            <span onClick={()=>{
              dispatch(setShowLogin(false));
              navigate('/ForgotPassword')
              
            }} style={{ cursor: 'pointer' }} className="text-primary">
              Forgot Password ?
            </span>
            <p>
              Don't have an account?
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
          </>
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
