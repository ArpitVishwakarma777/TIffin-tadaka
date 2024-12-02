import React from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import "./Header.css";
import webLogo from "../../assets/logo/web-logo 1.png";
import "bootstrap/dist/js/bootstrap.bundle";
import { useDispatch, useSelector } from "react-redux";
import SignPage from '../SignUp/SignPage.jsx'
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state) => state.manageLoginStatus.loginStatus
  );
  return (
    <>
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
                <Link className="nav-link " aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-xxl-4">
                <Link className="nav-link" to="#">
                  Manu
                </Link>
              </li>
              <li className="nav-item ms-xxl-4">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item ms-xxl-4">
                <Link className="nav-link" to="#" tabIndex={-1}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="action_bar d-flex align-items-lg-center  text-align-center">
              <div className="contain  mx-xl-4  mx-lg-2 mx-sm-5 mx-xs-3  ">
                <button style={{ border: "none" }}>
                  {" "}
                  <span className=" mt-1 material-symbols-outlined">
                    shopping_bag
                  </span>
                  <span>1</span>
                </button>
                <br />
              </div>
              <div className="contain  mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button style={{ border: "none" }}>
                  <span className="material-symbols-outlined mt-1">
                    favorite
                  </span>{" "}
                </button>
              </div>
              <div className="contain  mx-xl-4  mx-lg-2  mx-sm-5 mx-xs-3 ">
                <button onClick={()=>{
                  navigate('/SignUp');
                }} type="button" className="btn_sign btn-outline-success">
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
