import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { NewCard, carddata } from "../../Helper/Cards.jsx";
import menuBanner from "../../assets/Menu-contain/Menu_Template.png";
import designing from "../../assets/Menu-contain/title-shape.png";
import welcomeImage from '../../assets/Menu-contain/welcome.jpg'
function Menu() {
  const [onedayBtn, setOnedayBtn] = React.useState(false);
  const [weeklyBtn, setWeeklyBtn] = React.useState(false);
  const [monthlyBtn, setMonthlyBtn] = React.useState(false);
  return (
    <>
      <div
        style={{ position: "relative", overflow: "hidden", height: "200px" }}
      >
        <span
          style={{
            fontSize: "3.5rem",
            position: "absolute",
            top: "22%",
            left: "50%",
            transform: "translate(-50%,0%)",
          }}
          className="text-white"
        >
          Our Menu
        </span>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={menuBanner}
          alt="banner"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-4">
        <span style={{ width: "170px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={designing}
            alt="banner"
          />
        </span>

        <div className="d-flex justify-content-center flex-column flex-sm-row">
          <span
            style={{fontFamily: "Ubuntu" }}
            className=" second-title me-3"
          >
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
            Welcome to <span className="fw-bold text-warning">Tiffin Tadaka</span> Discover
              our carefully crafted menu featuring fresh, homemade, and delicious
            meals. We offer a variety of vegetarian and non-vegetarian options,
            along with special diet plans and customizable meal packages to suit
            your needs. . Order now and enjoy healthy, homely
            food delivered straight to your doorstep!
          </p>
          <div style={{width:'290px',height:'250px'}} className="col-4 pb-lg-4 ps-lg-4 ">
            <img style={{width:'100%',height:'100%'}} src={welcomeImage} alt="" />
          </div>
        </div>
      </div>
      <div className=" d-flex  justify-content-center flex-column align-items-center flex-sm-row">
        <span
          style={{     color: "red", fontFamily: "Ubuntu" }}
          className="first-title me-3 "
        >
          Tiffin{" "}
        </span>
        <span className='first-title' style={{ fontFamily: "Ubuntu", color:'darkGreen  ' }}> Category</span>
      </div>
      <div className="container mt-3">
        <div
          className="row d-flex mb-5 flex-wrap
  "
        >
          <div className="col-sm-4 mb-1 mb-sm-0 d-flex flex-column align-items-center justify-content-center ">
            <div
              className="a bg-success fs-3   d-flex justify-content-center align-items-center  "
              style={{ height: "90px" }}
            >
              Daily Tiffin
            </div>
          </div>
          <div className="col-sm-4 d-flex  mb-1 mb-sm-0 align-items-center flex-column justify-content-center">
            {" "}
            <div
              className="a bg-success  fs-3 d-flex justify-content-center align-items-center "
              style={{ height: "90px" }}
            >
              Weekly Tiffin
            </div>
          </div>
          <div className="col-sm-4  mb-1 mb-sm-0 d-flex align-items-center flex-column justify-content-center">
            {" "}
            <div
              className="a bg-success fs-3 d-flex justify-content-center align-items-center "
              style={{ height: "90px" }}
            >
              Monthly Tiffin
            </div>
          </div>
        </div>
      </div>

      <div className="container  py-2">
        <div className="row d-flex flex-wrap ">
          {carddata.map((card) => {
            return <NewCard card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
