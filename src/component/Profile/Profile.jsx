import React, { useState, useEffect } from "react";
import "./Profile.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import image from "../../assets/Profile/Arpit.jpg";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setShowProfile, setUser } from "../../RTK/slices";

function Profile() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.manageUserStatus.user);
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);
  const [mobile, setMobile] = useState(userDetails.mobile);
  const [address, setAddress] = useState(userDetails.address);
  const [profileImage, setProfileImage] = useState(userDetails.img);
const [uid, setuid] = useState(userDetails.uid)
  const handleUpdate = async () => {
    console.log("client uid : ",uid);
    
    console.log("Updated rtk:", userDetails);
    await axios.patch("http://localhost:8000/api/home/profile", {
     uid,
      mobile,
      address,
      profileImage,
    });
  };

  const showProfile = useSelector(
    (state) => state.manageProfileStatus.showProfile
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Update the image source
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
    handleUpdate();
  };
  return (
    <>
      <div className="profile-popup">
        <form className="profile-popup-container d-flex flex-column align-items-center justify-content-center align-self-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  overflow: "hidden", // Ensures the image stays within the circle
                  borderRadius: "50%", // Makes the div circular
                }}
                className="col-6 bg-primary d-flex justify-content-center align-items-center"
              >
                <img
                  style={{ height: "130px", paddingTop: "0px" }}
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
                  className="align-self-end"
                  onClick={() =>
                    document.getElementById("upload-profile-image").click()
                  }
                >
                  <FaPencilAlt />
                </span>
                <span
                  className="mt-3"
                  onClick={() => {
                    handleUpdateProfileData();
                    dispatch(setShowProfile(false));
                  }}
                >
                  <RxCross1 color="black" />
                </span>
              </div>
            </div>
          </div>
          <div className="profile-popup-inputs">
            <div className="d-flex flex-column">
              <div>
                <label htmlFor="name"> Name</label>
                <input
                  disabled
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className=" my-2 ms-4 ms-xl-4 ms-xxl-5 "
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email"> Email </label>
                <input
                  disabled
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="my-2 ms-4 ms-xl-4 ms-xxl-5  "
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                {" "}
                <label className="me-3" htmlFor="mobile">
                  {" "}
                  Mobile
                </label>
                <input
                  id="mobile"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  className="my-2 ms-md-0 ms-xl-0 ms-xxl-4   "
                  type="tel"
                  placeholder="Enter Mobile number"
                  required
                />
              </div>
              <div>
                <label htmlFor="address"> Address</label>
                <input
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="my-2  me-xl-3 ms-xxl-4 "
                  type="text"
                  placeholder="Enter Address"
                  required
                />
              </div>
            </div>
          </div>
          {/* <button className="Sign_button">hello</button>
          <div className="profile-popup-condtation">
            <input  type="checkbox" required />
            <p>By Continuing, I Agree to the tems-xl-4rms-xxl of use & privacy policy.</p>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default Profile;
