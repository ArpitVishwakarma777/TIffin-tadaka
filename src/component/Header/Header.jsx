import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import webLogo from "../../assets/logo/web-logo 1.png";
import "bootstrap/dist/js/bootstrap.bundle";
export default function Header() {
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
            <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Manu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" tabIndex={-1}>
                  Contect Us
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
                <button type="button" className="btn_sign btn-outline-success">
                  Sign-In
                </button>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
