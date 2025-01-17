import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { DicriptionPopup } from "../../Helper/DiscriptionPopup.jsx";
import "./Header.css";
import axios from "axios";
import { GoDotFill } from "react-icons/go";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

import {
  setShowLogin,
  setSignUp,
  setShowProfile,
  removeUser,
  emptyCarts,
  setLogout,
  setUser,
  changeCart,
  setTAddress,
} from "../../RTK/slices.js";

import webLogo from "../../assets/logo/web-logo 1.png";
import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch, useSelector } from "react-redux";
import SignPage from "../SignUp/SignPage.jsx";
import Profile from "../Profile/Profile.jsx";
export default function Header() {
  const showPopup = useSelector((state) => state.managePopupStatus.showPopup);
  const dispatch = useDispatch();
  const addedCarts = useSelector((state) => state.manageAddCartData.addedCarts);
  const loginStatus = useSelector(
    (state) => state.manageLoginStatus.loginStatus
  );
  const showProfile = useSelector(
    (state) => state.manageProfileStatus.showProfile
  );
  const showLogin = useSelector((state) => state.manageLoginStatus.showLogin);

  const uid = localStorage.getItem("userId");
  useEffect(() => {
    const uid = localStorage.getItem("userId");

    const handleLogin = async (uid) => {
      try {
        const userData = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/login`,
          {
            params: { uid },
          }
        );
        const data = userData.data;
        if (!data.name) {
          toast.error("User  data not found");
        }
        dispatch(setUser(data));
        dispatch(changeCart(data.addedCarts));
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    const handlegetTAdderss = async () => {
      const response = await axios
        .get(`${import.meta.env.VITE_APP_URL}/api/contact/data`)
        .then((response) => {
          dispatch(setTAddress(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    };
    handlegetTAdderss();
    if (uid) {
      console.log("RTK Address management will conduct");

      handleLogin(uid);
      dispatch(setLogout());
    } else {
      dispatch(setSignUp());
    }
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      dispatch(setSignUp());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  function handleButton(e) {
    e.preventDefault();
    if (!uid) {
      dispatch(setShowLogin(true));
    } else {
      const confirmLogout = window.confirm("Do you want to logout?");
      if (confirmLogout) {
        localStorage.removeItem("userId");
        handleLogout();
        dispatch(removeUser());
        dispatch(emptyCarts());
        toast.success("Logout successfully");
      }
    }
  }
  return (
    <>
      {/* discription box */}
      {showPopup ? <DicriptionPopup /> : null}
      {/* Toast Component */}
      <ToastContainer />

      {/* Profile Component */}

      <div className={showProfile === true ? "background-blur" : null}>
        {showProfile === true ? <Profile /> : null}
      </div>
      {/* SignUp Component */}
      <div
        className={
          showLogin === true || showPopup === true ? "background-blur" : null
        }
      >
        {" "}
        {showLogin === true ? <SignPage /> : null}
      </div>
      <nav className=" text-decoration-none navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container-fluid box ">
          <img className="img" src={webLogo} alt />
          <button
            className="navbar-toggler"
            type="button"
            onClick={(e) => e.preventDefault()}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse mx-4 nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-lg-auto  mb-2 mb-lg-0">
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-3 " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-3" to="/Menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-3" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-3" to="/Contact" tabIndex={-1}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="action_bar d-flex align-items-lg-center  text-align-center">
              <div className="contain me-4  mx-xl-4  mx-lg-2 mx-sm-5 mx-xs-3  ">
                <Link to="/Wishlist" style={{ textDecoration: "none" }}>
                  {" "}
                  <FaBagShopping size={25} color="green" />
                  {addedCarts.length !== 0 && <GoDotFill color="red" />}
                </Link>
                <br />
              </div>
              <div className="contain  me-5 ms-3 mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }}
                  style={{ border: "none", background: "none" }}
                >
                  <IoMdContact color="green" size={35} />
                </button>
              </div>
              <div className="contain    mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button
                  onClick={handleButton}
                  type="button"
                  className="btn_sign btn-outline-success"
                >
                  {loginStatus}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
