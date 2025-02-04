import React, { useState, useEffect } from "react";
import "./Profile.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCameraRotate } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setShowProfile, setUser } from "../../RTK/slices";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.manageUserStatus.user);
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);
  const [mobile, setMobile] = useState(userDetails.mobile);
  const [address, setAddress] = useState(userDetails.address);
  const [profileImage, setProfileImage] = useState(userDetails.img);
  const uid = localStorage.getItem("userId");
  const handleUpdate = async () => {
    console.log("client uid : ", uid);

    console.log("Updated rtk:", userDetails);

    await axios.patch(`${import.meta.env.VITE_APP_URL}/api/home/profile`, {
      uid,
      mobile,
      address,
      profileImage,
    });
  };
  const uploadImageToCloudinary = async (file) => {
    const url = "https://api.cloudinary.com/v1_1/drzc94rvk/image/upload";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_file");

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully:", response.data);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  const showProfile = useSelector(
    (state) => state.manageProfileStatus.showProfile
  );

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);

      if (uid) {
        const imgdata = await uploadImageToCloudinary(file);
        dispatch(setProfileImage(imgdata));
      } else {
        setProfileImage(img);
      }
    }
  };
  const handleUpdateProfileData = async () => {
    dispatch(
      setUser({
        ...userDetails,
        img: profileImage,
        address: address,
        mobile: mobile,
      })
    );
    if (uid) {
      handleUpdate();
    }
  };
  const handlePasswordReset = async () => {
    const auth = getAuth();

    try {
      const response = await sendPasswordResetEmail(auth, email);
      toast.success("Request send, please check Email");
    } catch (error) {
      toast.error("Request is not Send,Please try again");
    }
  };
  return (
    <>
      <div className="profile-popup">
        <form className="profile-popup-container d-flex flex-column align-items-center justify-content-center align-self-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div
                style={{
                  height: "110px",
                  width: "110px",
                  overflow: "hidden",
                  borderRadius: "50%",
                  border: "2px solid red",
                }}
                className="col-6 bg-primary d-flex justify-content-center align-items-center"
              >
                <img
                  className="img-circle img-responsive"
                  style={{ height: "120px", paddingTop: "5px" }}
                  src={profileImage}
                  alt="profile"
                />
              </div>

              <div className="col-6 d-flex justify-content-between">
                {/* Hidden file input  */}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-profile-image"
                  onChange={handleImageChange}
                />
                {/* Pencil Icon triggers the file input  */}
                <span
                  className="align-self-end cursor-pointer"
                  onClick={() =>
                    document.getElementById("upload-profile-image").click()
                  }
                >
                  <FaCameraRotate size={25} />
                </span>
                <span
                  className="mt-3 cursor-pointer"
                  onClick={() => {
                    dispatch(setShowProfile(false));
                  }}
                >
                  <RxCross1 color="black" />
                </span>
              </div>
            </div>
          </div>
          <div className="profile-popup-inputs">
            <div className="text-end">
              <button className="rounded text-success px-4"
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(false);
                }}
              >
                Edit
              </button>
            </div>
            <div className="d-flex flex-column">
              <div>
                <label htmlFor="name" className="col-3">
                  {" "}
                  Name
                </label>
                <input
                  disabled
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="col-7 my-2 ms-4 ms-xl-4 ms-xxl-5 "
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label className="col-3" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>
                <input
                  disabled
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="col-7 my-2 ms-4 ms-xl-4 ms-xxl-5"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                {" "}
                <label className="col-3" htmlFor="mobile">
                  {" "}
                  Mobile
                </label>
                <input
                  disabled={edit}
                  id="mobile"
                  value={mobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 10) {
                      setMobile(value);
                    }
                  }}
                  className="col-7 my-2 ms-4 ms-xl-4 ms-xxl-5"
                  type="tel"
                  placeholder="Enter Mobile number"
                  required
                />
              </div>
              <div>
                <label className="col-3" htmlFor="address">
                  {" "}
                  Address
                </label>
                <input
                  disabled={edit}
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className=" col-7 my-2 ms-4 ms-xl-4 ms-xxl-5  "
                  type="text"
                  placeholder="Enter Address"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <button
              className="btn saveButton"
              onClick={() => {
                dispatch(setShowProfile(false));
                handlePasswordReset();
              }}
            >
              Reset Password
            </button>{" "}
            <button
              hidden={edit}
              className="btn saveButton "
              onClick={() => {
                dispatch(setShowProfile(false));
                handleUpdateProfileData();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
