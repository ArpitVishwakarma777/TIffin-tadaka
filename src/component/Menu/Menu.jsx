import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
function Menu() {
  const [TiffinBtnColor, setTiffinBtnColor] = React.useState([
    "bg-success",
    "bg-success",
    "bg-success",
  ]);
  const ref = useRef(null);
  const navigate = useNavigate();
  function handleTiffin(e) {
    const array = [...TiffinBtnColor];

    const previousColor = array[e.target.id];
    array.map((value, id) => {
      if (value !== "bg-success") {
        array[id] = "bg-success";
      }
    });
    array[e.target.id] = "bg-dark";
    setTiffinBtnColor(array);
    const text = e.target.innerText;

    switch (text) {
      case "One Time Meal":
        navigate("/Menu/Daily");
        ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Weekly Tiffin":
        navigate("/Menu/Weekly");
        ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Monthly Tiffin":
        navigate("/Menu/Monthly");
        ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        console.log("default");
    }
  }
  return (
    <>
      <div
        style={{ position: "relative", overflow: "hidden", height: "220px" }}
      >
        <span
          style={{
            fontSize: "3.5rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className="text-white"
        >
          Our Menu
        </span>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={
            "https://res.cloudinary.com/drzc94rvk/image/upload/v1734967920/Menu_Template_e2dmd6.png"
          }
          alt="banner"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-4">
        <span style={{ width: "170px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={
              "https://res.cloudinary.com/drzc94rvk/image/upload/v1734966535/title-shape_qukibh.png"
            }
            alt="banner"
          />
        </span>

        <div className="d-flex justify-content-center flex-column flex-sm-row">
          <span style={{ fontFamily: "Ubuntu" }} className=" second-title me-3">
            Indian{" "}
          </span>
          <span
            className="second-title"
            style={{ fontFamily: "Ubuntu", color: "red" }}
          >
            {" "}
            Foods
          </span>
        </div>

        <div className="d-flex  justify-content-center flex-lg-row flex-column-reverse align-items-center">
          <p className="col-lg-8 col-sm-10 col-9   fs-4">
            <p className="fs-3">
              {" "}
              Enjoy the flavours of India served hot in true Indian style: in a
              tiffin box.
            </p>
            Welcome to{" "}
            <span className="fw-bold text-warning">Tiffin Tadaka</span> Discover
            our carefully crafted menu featuring fresh, homemade, and delicious
            meals. We offer a variety of vegetarian and non-vegetarian options,
            along with special diet plans and customizable meal packages to suit
            your needs. . Order now and enjoy healthy, homely food delivered
            straight to your doorstep!
          </p>
          <div
            style={{ width: "280px", height: "258px" }}
            className="col-4 pb-lg-4 ps-lg-4 "
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734966535/welcome_tnfqq3.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" mb-4 pb-1 d-flex  justify-content-center flex-column align-items-center flex-sm-row">
        <span
          style={{ color: "red", fontFamily: "Ubuntu" }}
          className="first-title me-3 "
        >
          Tiffin{" "}
        </span>
        <span
          className="first-title"
          style={{ fontFamily: "Ubuntu", color: "darkGreen  " }}
        >
          {" "}
          Category
        </span>
      </div>
      <div className="container mt-3">
        <div
          className="row d-flex mb-5 flex-wrap
  "
        >
          <div className="col-sm-4 cursor-pointer mb-1 mb-sm-0 d-flex flex-column align-items-center justify-content-center ">
            <div
              id="0"
              onClick={handleTiffin}
              className={`a ${TiffinBtnColor[0]} fs-3 ps-sm-4 ps-md-0 d-flex justify-content-center align-items-center`}
              style={{ height: "80px" }}
            >
              One Time Meal
            </div>
          </div>
          <div className="col-sm-4 d-flex cursor-pointer mb-1 mb-sm-0 align-items-center flex-column justify-content-center">
            {" "}
            <div
              id="1"
              onClick={handleTiffin}
              className={`a ${TiffinBtnColor[1]} fs-3 d-flex justify-content-center align-items-center `}
              style={{ height: "80px" }}
            >
              Weekly Tiffin
            </div>
          </div>
          <div className="col-sm-4  mb-1 cursor-pointer mb-sm-0 d-flex align-items-center flex-column justify-content-center">
            {" "}
            <div
              id="2"
              onClick={handleTiffin}
              className={`a ${TiffinBtnColor[2]} fs-3 d-flex justify-content-center align-items-center`}
              style={{ height: "80px" }}
            >
              Monthly Tiffin
            </div>
          </div>
        </div>
      </div>

      <div className="container  py-2">
        <div ref={ref} className="row d-flex flex-wrap ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Menu;
