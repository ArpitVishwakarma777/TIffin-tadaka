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
import { CgProfile } from "react-icons/cg";
import { MdContactPhone, MdInfo } from "react-icons/md";
import { IoIosHelpCircle, IoMdRestaurant } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { handleButton } from "../Header/Header.jsx";
import {
  RiInstagramFill,
  RiLoginBoxLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import "./Footer.css";
import { setShowProfile, setSignUp } from "../../RTK/slices";
import { getAuth, signOut } from "firebase/auth";
import { FaBagShopping } from "react-icons/fa6";
export default function Footer() {
  const dispatch = useDispatch();
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
  const loginStatus = useSelector(
    (state) => state.manageLoginStatus.loginStatus
  );
  const tiffinAddress = useSelector(
    (state) => state.managetAddressStatus.tiffinAddress || []
  );
  const uid = localStorage.getItem("userId");
  return (
    <footer className=" container-fluid text-center text-lg-start bg-color text-muted">
      <section className="d-flex justify-content-center text-align-center justify-content-lg-around p-4 border-bottom">
        <div className="me-5 d-none d-lg-block media_text">
          <span className="fs-4">
            Get connected with us on social networks:
          </span>

        </div>
        <div>
          <Link
            href
            className=" btn btn_footer btn-outline btn-floating "
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href
            className=" btn btn_footer  btn-outline btn-floating "
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href
            className="btn btn_footer  btn-outline btn-floating "
          >
            <FaGoogle size={20} />
          </Link>
          <Link
            href
            className="btn btn_footer  btn-outline btn-floating "
          >
            <RiInstagramFill size={20} />
          </Link>
          <Link
            href
            className="btn btn_footer  btn-outline btn-floating "
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href
            className="btn d-none d-sm-inlimd  btn_footer  btn-outline btn-floating "
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </section>
      <section>
        <div className="container-lg container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-sm-3 d-none d-sm-block col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fs-3 fw-bold mb-4">
                <i className="fas fa-gem me-3 " />
                Tiffin Tadaka
              </h5>
              <p className="fs-4">
                Bringing home-style meals with traditional flavors and modern
                convenience.
              </p>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className=" main-teaxt text-uppercase fw-bold fs-3 mb-4">
                Products
              </h5>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link to="/Home" className="d-none d-md-inline text-reset fs-4">
                  Home
                </Link>
                <Link to="/Home" className="text-reset fs-4">
                  <IoHomeSharp size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home" className="d-inline d-md-none" />
                </Link>
              </p>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link to="/Menu" className="d-none d-md-inline text-reset fs-4">
                  Tiffin
                </Link>
                <Link to="/Menu" className="text-reset fs-4">
                  <IoMdRestaurant size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tiffins" className="d-inline d-md-none" />
                </Link>
              </p>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link
                  to="/About"
                  className="d-none d-md-inline  text-reset fs-4"
                >
                  About
                </Link>
                <Link to="/About" className="text-reset fs-4">
                  <MdInfo size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="About" className="d-inline d-md-none" />
                </Link>
              </p>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link
                  to="/Contact"
                  className=" d-none d-md-inline text-reset fs-4"
                >
                  Contact Us
                </Link>
                <Link to="/Contact" className="text-reset fs-4">
                  <MdContactPhone size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact" className="d-inline d-md-none" />
                </Link>
              </p>
            </div>
            <div className="col-sm-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold fs-3 mb-4"><span className="d-none d-md-inline">Useful</span> links</h5>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }}
                  className="d-none d-md-inline text-reset fs-4"
                >
                  Profile
                </Link>
                <Link
                  onClick={() => {
                    dispatch(setShowProfile(true));
                  }} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile"
                  className="d-inline d-md-none text-reset fs-4"
                >
                  <CgProfile  size={25} />
                </Link>
              </p>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link
                  to="/CartItem"
                  className="d-none d-md-inline text-reset fs-4"
                >
                  Cart items
                </Link>
                <Link
                  to="/CartItem"
                   className="d-inline d-md-none text-reset fs-4"
                >
                  <FaBagShopping size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart items"/>
                </Link>
              </p>
              <p className="d-inline mx-4 mx-sm-0 d-sm-block ">
                <Link
                  onClick={(e) => {
                    handleButton(e, uid, dispatch, handleLogout);
                  }}
                  className="d-none d-md-inline text-reset fs-4"
                >
                  {loginStatus}
                </Link>
                <Link
                  onClick={(e) => {
                    handleButton(e, uid, dispatch, handleLogout);
                  }}
                   className="d-inline d-md-none text-reset fs-4"
                >
                  {loginStatus === "SignUp" ? (
                    <RiLoginBoxLine size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="SignUp" />
                  ) : (
                    <RiLogoutBoxLine size={25} data-bs-toggle="tooltip" data-bs-placement="bottom" title="LogOut"/>
                  )}
                </Link>
              </p>
              {/* <p className="d-inline mx-4  mx-sm-0 d-sm-block ">
                <Link to="" className=" d-none d-md-inline text-reset fs-4">
                  Help
                </Link>
                <Link to=""  className="d-inline d-md-none text-reset fs-4">
                  <IoIosHelpCircle size={25}/>
                </Link>
              </p> */}
            </div>
            <div className="d-none d-xxl-inline-block  col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h5 className="text-uppercase fw-bold fs-3 mb-4">Contact</h5>
              <p className="d-inline mx-4 mx-sm-0 fs-4 d-sm-block ">
                <i className="fas fa-home me-3 " />
                {tiffinAddress.map((data) => {
                  return data.address;
                })}
              </p>
              <p className="fs-4 d-flex  ">
                <i className="fas fa-envelope mt-1  me-3" />
                <span className="fs-4">
                  {" "}
                  {tiffinAddress.map((data) => {
                    return data.email;
                  })}
                </span>
              </p>
           
              <p className="d-inline mx-4 fs-4 mx-sm-0 d-sm-block ">
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
        className="text-center p-3 pb-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h5>Since August 2024</h5>
      </div>
    </footer>
  );
}
