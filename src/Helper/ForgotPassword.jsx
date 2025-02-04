import React from "react";
import "./ForgotPassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setShowLogin } from "../RTK/slices";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
const dispatch = useDispatch()
  const handlePasswordReset = async (data) => {
    const auth = getAuth();

    try {
      const response = await sendPasswordResetEmail(auth, data.email);
      console.log("response : ",response);
      toast.success("Password reset email sent if the email exists.");
navigate('/Home')
    } catch (error) {
      toast.error("Request is not Send,Please try again");
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-center py-5  ">
        <div className=" forgotpassword-box py-5 d-flex flex-column align-items-center">
          <svg
            aria-label="Trouble logging in?"
            class="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="96"
            role="img"
            viewBox="0 0 96 96"
            width="96"
          >
            <title>Trouble logging in?</title>
            <circle
              cx="48"
              cy="48"
              fill="none"
              r="47"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
            <path
              d="M60.931 70.001H35.065a5.036 5.036 0 0 1-5.068-5.004V46.005A5.036 5.036 0 0 1 35.065 41H60.93a5.035 5.035 0 0 1 5.066 5.004v18.992A5.035 5.035 0 0 1 60.93 70ZM37.999 39.996v-6.998a10 10 0 0 1 20 0v6.998"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
          <span className="my-2 fs-3 fw-bold">Change Password</span>
          <span className="mx-3 w-50">
            Enter your email and we'll send you a link to get back into your
            account.
          </span>
          <form onSubmit={handleSubmit(handlePasswordReset)} action="">
          <div className="d-flex flex-column align-items-center">
          <input
              className="my-4 py-2 px-2 shadow  rounded text-align-center border border-2"
             {...register("email",{required:"email is required"})}
              placeholder="Please Enter Email"
              type="email"

            />
            <button className="Sign_button fs-5">Send Request</button>
        </div>  </form>{" "}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
