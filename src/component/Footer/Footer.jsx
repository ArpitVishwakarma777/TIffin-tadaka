import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css";
import { setShowProfile } from "../../RTK/slices";
export default function Footer() {
  const dispatch = useDispatch();
  const tiffinAddress = useSelector(
    (state) => state.managetAddressStatus.tiffinAddress || []
  );
  return (
    <footer className="text-center text-lg-start bg-color text-muted">
      <section className="d-flex justify-content-center text-align-center justify-content-lg-around p-4 border-bottom">
        <div className="me-5 d-none d-lg-block media_text">
          <span className="fs-5">
            Get connected with us on social networks:
          </span>
        </div>
        <div>
          <Link
            href
            className="rounded-circle btn btn_footer btn-outline btn-floating m-1"
          >
            <FaFacebookF />
          </Link>
          <Link
            href
            className=" btn btn_footer rounded-circle btn-outline btn-floating m-1"
          >
            <FaTwitter />
          </Link>
          <Link
            href
            className="btn btn_footer rounded-circle btn-outline btn-floating m-1"
          >
            <FaGoogle />
          </Link>
          <Link
            href
            className="btn btn_footer rounded-circle btn-outline btn-floating m-1"
          >
            <RiInstagramFill />
          </Link>
          <Link
            href
            className="btn btn_footer rounded-circle btn-outline btn-floating m-1"
          >
            <FaLinkedin />
          </Link>
          <Link
            href
            className="btn btn_footer rounded-circle btn-outline btn-floating m-1"
          >
            <FaGithub />
          </Link>
        </div>
      </section>
      <section >
        <div className="container-lg container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fs-4 fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Tiffin Service
              </h5>
              <p className="fs-5">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className=" main-teaxt text-uppercase fw-bold fs-4 mb-4">
                Products
              </h5>
              <p>
                <Link to="/Home" className="text-reset fs-5">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/Menu" className="text-reset fs-5">
                  Tiffin
                </Link>
              </p>
              <p>
                <Link to="/About" className="text-reset fs-5">
                  About
                </Link>
              </p>
              <p>
                <Link to="/Contact" className="text-reset fs-5">
                  Contact Us
                </Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold fs-4 mb-4">Useful links</h5>
              <p>
                <Link
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }}
                  className="text-reset fs-5"
                >
                  Profile
                </Link>
              </p>

              <p>
                <Link to="/Wishlist" className="text-reset fs-5">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="" className="text-reset fs-5">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="" className="text-reset fs-5">
                  Help
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h5 className="text-uppercase fw-bold fs-4 mb-4">Contact</h5>
              <p>
                <i className="fas fa-home me-3" />
                {tiffinAddress.map((data) => {
                  return data.address;
                })}
              </p>
              <pre>
                <i className="fas fa-envelope me-3" />
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  {tiffinAddress.map((data) => {
                    return data.email;
                  })}
                </span>
              </pre>
              <p>
                <i className="fas fa-phone me-3" /> (+91)
                {tiffinAddress.map((data) => {
                  return data.phone;
                })}
              </p>
              <p>
                <i className="fas fa-print me-3" /> (+91)
                {tiffinAddress.map((data) => {
                  return data.phone;
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h5>Since August 2024</h5>
      </div>
    </footer>
  );
}
