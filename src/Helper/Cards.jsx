import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'; // Import Tooltip
import { useSelector, useDispatch } from "react-redux";
import {
  setshowPopup,
  addCart,
  setContentPopup,
  setHiddenPopup,
} from "../RTK/slices";
import { useNavigate } from "react-router-dom";

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
      await axios
        .patch(`${import.meta.env.VITE_APP_URL}/api/menu/addToCart`, {
          card,
          uid,
        })
        .then(() => {
          toast.success("Item has successfully been added to cart");
          dispatch(addCart(card));
        })
        .catch((error) => {
          toast.error("Cart is not added, please try again.");
          console.log("Error on client: ", error);
        });
    } else {
      console.log("Cart data not found");
    }
  };

  return (
    <>
      <div className="card-box col-xl-3 col-md-4 col-sm-6 col-xs-6 pb-sm-3 px-3 py-3">
        <div className="card box-shadow">
          <div className="card-image cursor-pointer position-relative">
            <img
              key={card.id}
              onClick={() => {
                handleImageClick(card);
              }}
              src={card.src}
              className="card-img-top"
              alt={card.title}
            />
            <span
              className={`${
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
                  data-tooltip-id="my-tooltip" // Add unique id here
                > 
                  <FaShoppingCart size={30} color="green" />
                </span>
                <Tooltip id="my-tooltip" className="tooltip-custom" place="top" content="Add Cart" />
                {/* Use Tooltip component to define content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
