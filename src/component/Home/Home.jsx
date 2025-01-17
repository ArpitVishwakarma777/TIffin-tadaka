import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Home.css";
import Testimonial from "./Testimonial";
import axios from "axios";
import { changeCart, setTAddress, setUser } from "../../RTK/slices.js";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [overviewData, setOverviewData] = useState([]);
  const user = useSelector((state) => state.manageUserStatus.user);
  
  useEffect(() => {
    const handleGetOverviewData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/home/tiffinOverview`
      );

      setOverviewData(response.data);
    };

    handleGetOverviewData();
  }, []);

  return (
    <>
      {/* For Carousels */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item1 carousel-item active ">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734965828/carousel1_f3p4jv.png"
              }
              className="d-block  h-lg-50 w-100"
              alt="..."
            />
            <div className="caption1 d-none d-lg-block h-50 ">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button
                onClick={() => {
                  navigate("/Menu");
                }}
                type="button"
                class="btn mx-4 px-4 btn-danger"
              >
                Order Now
              </button>
            </div>
          </div>
          <div className=" carousel-item2 carousel-item">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734965828/carousel2_uopdug.png"
              }
              className="d-block  h-lg-50 w-100"
              alt="..."
            />
            <div className="caption2 d-none d-lg-block">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button
                onClick={() => {
                  navigate("/Menu");
                }}
                type="button"
                class="btn mx-4 px-4 btn-danger"
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="carousel-item carousel-item3 ">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734965826/carousel3_zvoohu.png"
              }
              className="d-block  h-lg-50 w-100"
              alt="..."
            />
            <div className="caption3 d-none d-lg-block">
              <p>"Bringing the taste of home </p>
              <p> one tiffin at a time."</p>
              <button
                onClick={() => {
                  navigate("/Menu");
                }}
                type="button"
                class="btn mx-4 px-4 btn-danger"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid py-5  my-5 helper_template ">
        <div className="row d-flex   flex-wrap ">
          <div className=" d-flex my-lg-3 justify-content-center">
            <h1 style={{ color: "rgb(218, 165, 32)" }}>What We Offer !</h1>
          </div>
          <div className="col-md-4  my-sm-5 my-md-0 d-flex  flex-column align-items-center justify-content-center">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947443/helper_image_lczl9b.svg"
              }
              alt=""
            />
            <h3>Quick & Reliable </h3>
          </div>
          <div className="col-md-4  d-flex flex-column align-items-center  justify-content-center">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947444/helper_image2_wvycp9.svg"
              }
              alt=""
            />
            <h3>Doorstep Delivery</h3>
          </div>
          <div className="col-md-4 my-sm-5 my-md-0   d-flex align-items-center  flex-column justify-content-center">
            <img
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947444/helper_image3_xdo9dk.svg"
              }
              alt=""
            />
            <h3>Maintain Tempreture</h3>
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center flex-column align-content-center flex-sm-row">
        <h1 className="One-day-special ms-5  ms-sm-0 ">
          <span style={{ color: "red" }}>Tiffin's</span> Overview
        </h1>
      </div>

      <div className="container-fluid mt-5">
        {overviewData.map((data, index) => {
          if (index % 2 == 0) {
            return (
              <div className="row pt-5 d-flex  justify-content-between flex-column-reverse flex-sm-row  bg-light">
                <div className="col-sm-6 col-12 align-self-center ps-lg-5 fs-5">
                  <div className="text-center">
                    <h3 className="text-center text-success">{data.overviewType}</h3>
                    {data.overviewText}
                  </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center col-sm-6 col-12 ">
                  <img
                    className="tiffin-discription "
                    src={data.imgsrc}
                    alt="dish img"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className="row d-flex pt-5  justify-content-between flex-row flex-xs-column   bg-light">
                <div className=" col-sm-6 col-12 d-flex justify-content-center align-items-center ">
                  <img
                    className="tiffin-discription "
                    src={data.imgsrc}
                    alt="dish img"
                  />
                </div>
                <div className="col-sm-6 col-12 align-self-center fs-5 pe-lg-5">
                  <div className="text-center">
                    {" "}
                    <h3 className="text-center text-success">{data.overviewType}</h3>
                    {data.overviewText}
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="row">
          <div className=" col-12 bg-light  pb-5">
            <span className=" text-danger fs-4 ms-2 ms-lg-5 ">
              Many more items for you .....
            </span>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex  flex-sm-column-reverse flex-md-row flex-wrap justify-content-center">
          <div className=" col-sm-12 col-xs-12 col-md-6 d-flex justify-content-lg-center align-items-md-center">
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex  align-items-center d-md-block">
                <div className="d-flex justify-content-center">
                  <img
                    src={
                      "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947445/mobileImage_zcl0hm.svg"
                    }
                    alt=""
                  />
                </div>
                <h1>Download the app </h1>
              </div>
              <div className="d-flex py-2  align-items-center">
                <span>
                  {" "}
                  Order Indian food online from the comfort of your home.{" "}
                </span>
              </div>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                <span>
                  <img
                    src={
                      "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947444/google-play-button_fnx7bh.svg"
                    }
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src={
                      "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947443/app-store-button_n1npgq.svg"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-6  d-none d-md-flex d-sm-none justify-content-end h-50 ">
            <img
              style={{ width: "70%" }}
              src={
                "https://res.cloudinary.com/drzc94rvk/image/upload/v1734947443/download-app_b98mjs.avif"
              }
              alt=""
            />
          </div>
        </div>
      </div>

      {/*For textimonials*/}
      <Testimonial />
    </>
  );
}

