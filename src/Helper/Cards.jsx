import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  setshowPopup,
  addCart,
  setContentPopup,
  setHiddenPopup,
} from "../RTK/slices";
import { useNavigate } from "react-router-dom";
import { useId } from "react";
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

export const NewCard = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDisabled, setIsDisabled] = useState(false);
 
  const addedCarts = useSelector((state) => state.manageAddCartData.addedCarts);
  const uid = localStorage.getItem("userId");
  function handleImageClick(card) {
    dispatch(setContentPopup(card));
    dispatch(setshowPopup());
  }
  const handleCart = async (card) => {
   

    if (card) {
      
      const response = await axios
        .patch(`${import.meta.env.VITE_APP_URL}/api/menu/addToCart`, {
          card,
          uid,
        })
        .then(() => {
          toast.success("Item has succesfully added to cart");
          dispatch(addCart(card));
        })
        .catch((error) => {
          toast.error("Cart is not added, please try again.");
          console.log("error on client: ", error);
        });
    } else {
      console.log("cart data not found");
    }
  };
  return (
    <>
      <div className=" card-box col-xl-3 col-md-4 col-sm-6 col-xs-6 pb-sm-3  px-3 py-3 ">
        <div className="card box-shadow">
          <div className="card-image cursor-pointer position-relative">
            <img
              key={card}
              onClick={() => {
                handleImageClick(card);
              }}
              src={card.src}
              className="card-img-top"
              alt="..."
            />
            <span
              className={` ${
                location.pathname !== "/Menu/Daily" && "bg-warning"
              } oneday_price ms-xxl-4`}
            >
              ₹ {card.price}
            </span>
          </div>

          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className={card.textClass}></p>
            <div className="d-flex">
              <span>
                {" "}
                <button
                  onClick={() => {
                    navigate(
                      `/Menu/Checkout/${card.title}/${card.title}/${card.price}`
                    );
                  }}
                  className="btn me-xxl-5 me-4 me-md-2 me-lg-5 me-xl-5 btn-primary"
                >
                  Buy Now <span className="blink">!</span>
                </button>
              </span>
              <div
                className="d-flex justify-content-end"
                style={{ width: "30%" }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  className={`${
                    location.pathname !== "/Menu/Daily" && "d-none"
                  } buyIcon ${isDisabled && "disabled-class"}`}
                  onClick={() => {
                  

                    const cart = addedCarts.find((item) => item.id === card.id);
                    if (!cart) {
                      handleCart({ ...card, quantity: 1 });
                    }
                  }}
                >
                  <FaShoppingCart size={30} color="green" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
