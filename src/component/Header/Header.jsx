import React, { useState } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { DicriptionPopup } from "../../Helper/Cards.jsx";
import {
  setShowLogin,
  setSignUp,
  setLogout,
  setShowProfile,
} from "../../RTK/slices.js";

import webLogo from "../../assets/logo/web-logo 1.png";
import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch, useSelector } from "react-redux";
import SignPage from "../SignUp/SignPage.jsx";
import Profile from "../Profile/Profile.jsx";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  //Popup data
  const showPopup = useSelector((state) => state.managePopupStatus.showPopup);

  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state) => state.manageLoginStatus.loginStatus
  );
  const showProfile = useSelector(
    (state) => state.manageProfileStatus.showProfile
  );
  const listCount = useSelector(
    (state) => state.manageWishlistStatus.list.length
  );
  const showLogin = useSelector((state) => state.manageLoginStatus.showLogin);

  function handleButton(e) {
    e.preventDefault();
    if (loginStatus === "SignUp") {
      dispatch(setShowLogin(true));
    } else {
      dispatch(setSignUp());
      toast.success("Logout successfully ");
    }
  }
  return (
    <>
      {/* discription box */}

      {/* Toast Component */}
      <ToastContainer />

      {/* Profile Component */}

      <div className={showProfile === true ? "background-blur" : null}>
        {showProfile === true ? <Profile /> : null}
      </div>
      {/* SignUp Component */}
      <div className={showLogin === true ||showPopup===true ? "background-blur" : null}>
        {" "}
        {showLogin === true ? <SignPage /> : null}
      </div>
      <NavLink className=" text-decoration-none navbar navbar-expand-lg navbar-light bg-white  ">
        <div className="container-fluid box ">
          <img className="img" src={webLogo} alt />
          <button
            className="navbar-toggler"
            type="button"
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
              <div className="contain  mx-xl-4  mx-lg-2 mx-sm-5 mx-xs-3  ">
                <Link to="/Wishlist" style={{ textDecoration: "none" }}>
                  {" "}
                  <FaBagShopping size={25} color="green" />
                  <span className="text-dark">{listCount}</span>
                </Link>
                <br />
              </div>
              <div className="contain  mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button className={loginStatus!=="LogOut"&& "d-none"  }
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }}
                  style={{ border: "none" }}
                >
                  <IoMdContact color="green" size={35} />
                </button>
              </div>
              <div className="contain  mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
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
      </NavLink>
    </>
  );
}
