import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import { Link } from "react-router-dom";

location;
import { useSelector, useDispatch } from "react-redux";
import { setshowPopup, setContentPopup, setHiddenPopup } from "../RTK/slices";
import { useNavigate } from "react-router-dom";
// export const dailydata = [
//   {
//     id: 0,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965823/Dal_Bati_qrlxlm.jpg",
//     title: "Dal-Bati",
//     textClass: "card_text1",
//     text: " A plate with 5 ghee-soaked Batis, served with a bowl of hot Dal and fresh salad.",
//     price: 200,
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965822/aloo_parratha_suznnf.jpg",
//     title: "Dahi-Paratha",
//     textClass: "card_text2",
//     text: "(Panjabi Tad)A serving of 5 soft parathas with fresh yogurt and flavorful spices.",
//     price: 200,
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965828/Sev_zkhtof.jpg",
//     title: "sev-veg & more",
//     textClass: "card_text3",
//     text: "A plate with 4-5 soft rotis, extra crispy gram flour noodles curry,and salad.",
//     price: 200,
//   },
//   {
//     id: 3,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965829/Poori_zmjxw1.jpg",
//     title: "Poori special",
//     textClass: "card_text4",
//     text: " Enjoy 5 fluffy puris paired with a flavorful potato curry and a side of fresh salad.",
//     price: 200,
//   },
//   {
//     id: 4,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965828/Indian_veg_thali_btxk1o.jpg",
//     title: "Full-thali",
//     textClass: "card_text5",
//     text: " India flavors in one plate Roti, Sabji, Dahi, Salad, and more complete thali.",
//     price: 200,
//   },
//   {
//     id: 5,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965829/Makki_Ki_Roti_Sarson_Ka_Saag_qknxho.png",
//     title: "Chapati special",
//     textClass: "card_text3",
//     text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
//     price: 200,
//   },

//   {
//     id: 6,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734965826/dal_chaval_v9aqrk.jpg",
//     title: "Basmati chaval",
//     textClass: "card_text3",
//     text: "Taste tradition with Basmati chaval and dal with masala and salad",
//     price: 200,
//   },
// ];
// export const weeklydata = [
//   {
//     id: 0,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Weekly Subscription",
//     text: {},
//     price: 999,
//   },
//   {
//     id: 1,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Weekly Subscription",
//     text: {},
//     price: 985,
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Weekly Subscription",
//     text: {},
//     price: 900,
//   },
//   {
//     id: 3,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Weekly Subscription",
//     text: {},
//     price: 950,
//   },
// ];
// export const monthlydata = [
//   {
//     id: 0,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Monthly Subscription",

//     text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
//     price: 1800,
//   },
//   {
//     id: 1,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Monthly Subscription",

//     text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
//     price: 1600,
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Monthly Subscription",

//     text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
//     price: 1700,
//   },
//   {
//     id: 3,
//     src: "https://res.cloudinary.com/drzc94rvk/image/upload/f_auto,q_auto/v1734966536/ChefImage_ga7wvl.jpg",
//     title: "Monthly Subscription",

//     text: "Taste tradition with 4 Makki di Roti and full plat Sarson da Saag- test of panjabi",
//     price: 2000,
//   },
// ];
function Cards() {
  const [readMore, setReadMore] = React.useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home/card");
        setData(response.data); // Store the fetched data in state.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run only once

  return (
    <>
      <div className="container card-container py-2">
        <div className="row">
          {data.map((card) => {
            return (
              <div className=" card-box col-sm-4 col-lg-3 col-xs-6 pb-sm-3  px-3 py-3 ">
                <div className="card box-shadow">
                  <img src={card.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className={card.textClass}>
                      {readMore ? card.text : null}
                      <button
                        style={{ textDecoration: "none", border: "none" }}
                        className=" btn-link"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? "Read Less" : "Read More"}
                      </button>
                    </p>
                    <div>
                      <span>
                        {" "}
                        <Link to={"/Menu"} className="btn me-5  btn-primary">
                          buy now !
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export const NewCard = ({ card }) => {
  const [readMore, setReadMore] = React.useState(false);

 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleImageClick(card) {
    dispatch(setContentPopup(card));
    dispatch(setshowPopup());
  }
  return (
    <>
      <div className=" card-box col-xl-3 col-md-4 col-sm-6 col-xs-6 pb-sm-3  px-3 py-3 ">
        <div className="card box-shadow">
          <img
            key={card}
            onClick={() => {
              handleImageClick(card);
            }}
            src={card.src}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className={card.textClass}>
              {readMore ? card.text : null}
              {/* <button
                style={{ textDecoration: "none", border: "none" }}
                className=" btn-link"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </button> */}
            </p>
            <div>
              <span>
                {" "}
                <button
                  onClick={() => {
                    navigate(`/Menu/Checkout/${card.title}/${card.price}`);
                  }}
                  className="btn me-xxl-5 me-4 me-md-2 me-lg-5 me-xl-5 btn-primary"
                >
                  Buy Now <span className="blink">!</span>
                </button>
              </span>
              <span className="oneday_price ms-xxl-4 ">₹{card.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
