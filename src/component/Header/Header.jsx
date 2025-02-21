import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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


import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch, useSelector } from "react-redux";
import SignPage from "../SignUp/SignPage.jsx";
import Profile from "../Profile/Profile.jsx";

export function handleButton(e,uid,dispatch,handleLogout) {
  e.preventDefault();
  if (!uid) {
    dispatch(setShowLogin(true));
  } else {
    toast(
      ({ closeToast }) => (
        <div className="d-flex flex-column gap-2">
          <p className="text-dark fw-medium">
            Are you sure you want to log out?
          </p>
          <div className="d-flex justify-content-end gap-3">
            <button
              className="btn btn-warning text-dark"
              onClick={() => {
                closeToast();
                // Perform logout
               localStorage.removeItem("userId");
      handleLogout();
      dispatch(removeUser());
      dispatch(emptyCarts());
      toast.success("Logout successfully"); }}
            >
              Yes
            </button>
            <button
              className="btn btn-secondary"
              onClick={closeToast}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false, // Disable auto-close for confirmation
        closeOnClick: false,
        draggable: false,
        hideProgressBar: true,
      }
    );
    
  }
}

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
    const handleNavLinkClick = () => {
      if (window.innerWidth < 992) { // Collapse only if screen width < 992px (Mobile/Tablet)
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse.classList.contains("show")) { // Only close if it's open
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    };
  
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));
  
    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleNavLinkClick));
    };
  }, []);
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

  
  return (
    <>
      {/* discription box */}
      {showPopup ? <DicriptionPopup /> : null}
      {/* Toast Component */}
      <ToastContainer />

      {/* Profile Component */}

      <div className={showProfile === true ? "Empty-background" : null}>
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
     
      <nav className=" text-decoration-none navbar navbar-expand-lg navbar-light bg-white shadow p-0">
        <div className="container-fluid box py-2 ">
          <img className="img" src="https://res.cloudinary.com/drzc94rvk/image/upload/v1734965197/web-logo_1_bxr7ro.png" alt />
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
                <NavLink className="nav-link fs-2 " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-2" to="/Menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-2" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item ms-xxl-4">
                <NavLink className="nav-link fs-2" to="/Contact" tabIndex={-1}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="action_bar d-flex align-items-lg-center  text-align-center">
              <div className="contain d-none d-lg-block me-5  mx-xl-4  mx-lg-2 mx-sm-5 mx-xs-3">
                <Link to="/CartItem" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart Item" style={{ textDecoration: "none" }}>
                  {" "}
                  <FaBagShopping size={30} color="green" />
                  {addedCarts.length !== 0 && <GoDotFill color="red" />}
                </Link>
                <br />
              </div>
              <div className="contain d-none d-lg-block me-5 ms-3 mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile"
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }}
                  style={{ border: "none", background: "none" }}
                >
                  <IoMdContact color="green" size={38} />
                </button>
              </div>
              <div className="contain d-none d-lg-block   mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button
                  onClick={(e)=>{handleButton(e,uid,dispatch,handleLogout)}}
                  type="button"
                  className="btn_sign btn-outline-success fs-5"
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
