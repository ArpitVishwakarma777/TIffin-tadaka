import React, { useEffect, useState } from "react";
// import Item from "./Item.jsx";
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";
function Wishlist() {
  const orders = useSelector(
    (state) => state.manageUserStatus.user.subscription
  );

  console.log("orders : ", orders);
  if (!orders || orders.length === 0) {
    return (
      <div className="container">
        {/* <div className="fs-2 bold text-danger my-3 ">Order History</div> */}
        <div className="row  d-flex justify-content-center flex-wrap flex-xl-nowrap  ">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <img
              className="w-25 mt-5 pt-5"
              src="https://res.cloudinary.com/drzc94rvk/image/upload/v1735739978/No_order_r3flr9.jpg"
              alt=""
            />
            <div className="fs-2 bold text-danger mb-5 ">
              No Order History <span className="blink">!</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="fs-2 bold text-danger my-5 d-flex justify-content-center ">Order History</div>
          <div className="row  d-flex justify-content-center flex-wrap   ">
            {orders.map((order, index) => {
              return (
                <div key={index} className="order-card col-xl-4 col-md-5 mx-md-4 mx-xl-2 mb-4 bg-light me-2  shadow">
                  <div>
                    <span className=" my-4 text-danger bold">
                    { ` Order ID: ${order.orderid}`}
                    </span>
                    <hr />
                    <div className="d-flex mb-2 justify-content-between">
                      <span className="bold">Subscription:</span>
                      <span>{order.orderSummary.mealPlan}</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <span className="bold">Start Date:</span>
                      <span> 21/12/2024</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <span className="bold">End Date:</span>
                      <span> 21/01/2025</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <span className="bold">Total Amount:</span>
                      <span>{`₹ ${order.orderSummary.price}`}</span>
                    </div>
                    <div className="d-flex mb-2 justify-content-between">
                      <span className="bold">Payment type:</span>
                      <span>{order.paymentMethod}</span>
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
}

export default Wishlist;
