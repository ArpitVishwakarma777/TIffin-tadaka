import React, { useState } from "react";
import "./OrderHistory.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeOrderHistory } from "../../RTK/slices";
import axios from "axios";

function OrderHistory() {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.manageUserStatus.user.uid);
  const orders = useSelector(
    (state) => state.manageUserStatus.user.subscription
  );

  const handleManageOrders = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_URL}/api/menu/manageOrders`,
        {
          uid,
        }
      );

      dispatch(removeOrderHistory());
      toast.success("History removed");
    } catch (e) {
      console.log(e);
    }
  };

  if (uid) {
    if (orders.length === 0 || !orders) {
      return (
        <div className="container">
          <div className="row d-flex justify-content-center flex-wrap flex-xl-nowrap">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                className="w-25"
                src="https://res.cloudinary.com/drzc94rvk/image/upload/v1735739978/No_order_r3flr9.jpg"
                alt=""
              />
              <div className="fs-2 bold text-danger mb-5">
                No Order History
                <span className="blink">!</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="d-flex justify-content-end">
            <i 
              onClick={() => {
                toast(
                  ({ closeToast }) => (
                    <div className="d-flex flex-column gap-2">
                      <p className="text-dark fw-medium">
                        Do you Want Delete Selected Order History?
                      </p>
                      <div className="d-flex justify-content-end gap-3">
                        <button
                          className="btn btn-warning text-dark"
                          onClick={() => {
                            closeToast()
                            handleManageOrders();
                              }}
                          >
                            Yes
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={closeToast}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    ),
                    {
                      position: "top-center",
                      autoClose: false, // Disable auto-close for confirmation
                      closeOnClick: false,
                      draggable: false,
                      hideProgressBar: true,
                    }
                  );
              
            }} style={{cursor:"pointer"}} className="fas fa-trash-alt me-3 mb-5" />
        </div>
        <div className="row  d-flex justify-content-center flex-wrap   ">
          {orders.map((order, index) => {
            return (
              <div 
              onClick={(e)=>{
                

              }}
                key={index}
                className=" order-card col-xl-4 col-md-5 mx-md-4 mx-xl-2 mb-4 bg-light me-2  shadow"
              >
                <div>
                  <span className=" my-4 text-danger bold">
                    {` Order ID: ${order.orderid}`}
                  </span>
                  <hr />
                  <div className="d-flex mb-2 justify-content-between">
                    <span className="bold">Subscription:</span>
                    <span>{order.orderSummary.mealPlan}</span>
                  </div>
                  <div className="d-flex mb-2 justify-content-between">
                    <span className="bold">Start Date:</span>
                    <span> {order.startDate}</span>
                  </div>
                  <div className="d-flex mb-2 justify-content-between">
                    <span className="bold">Starting Time</span>
                    <span> {order.startingTime}</span>
                  </div>
                  <div className="d-flex mb-2 justify-content-between">
                    <span className="bold">End Date:</span>
                    <span> {order.endDate}</span>
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
    );
  }}else{
    return (
      <div className="container">
        <div className="row d-flex justify-content-center flex-wrap flex-xl-nowrap  ">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <img
              className="w-25"
              src="https://res.cloudinary.com/drzc94rvk/image/upload/v1735739978/No_order_r3flr9.jpg"
              alt=""
            />
            <div className="fs-2 bold text-danger mb-5 ">
              No Order History
              <span className="blink">!</span>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

export default OrderHistory;
