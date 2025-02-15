import React, { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import AddToCart from "./AddToCart";
// import Item from "./Item.jsx";
import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";
function CartItem() {
  const [activeButton, setActiveButton] = useState("Added Carts");
  return (
    <>
      <div className="container my-5">
        <div className="row text-center d-flex justify-content-center">
          <div
            onClick={() => {
              setActiveButton("Added Carts");
            }}
            className={`col-3 shadow selectButton1 ${
              activeButton === "Added Carts" && "bg-success text-light"
            }  `}
          >
            Add Carts
          </div>
          <div
            onClick={() => {
              setActiveButton("Order History");
            }}
            className={`col-3 shadow selectButton2  ${
              activeButton === "Order History" && "bg-success text-light"
            } `}
          >
            Order History
          </div>
        </div>
      </div>
      {activeButton === "Added Carts" && <AddToCart />}
      {activeButton === "Order History" && <OrderHistory />}
    </>
  );
}

export default CartItem;
