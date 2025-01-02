import React from "react";
// import Item from "./Item.jsx";
import "./Wishlist.css";
function Wishlist() {
  return (
    <>
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

          {/* <div className="order-card col-xl-4 col-md-5 mx-md-4 mx-xl-0 mb-4 bg-light me-2  shadow">
            <div>
              <span className=" my-4 bold">
                Order ID: 2345678ghjk56789gty9upihyo
              </span>
              <hr />
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Subscription:</span>
                <span>One time meal</span>
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
                <span>₹2000</span>
              </div>
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Payment type:</span>
                <span>COD</span>
              </div>
            </div>
          </div>
          <div className="order-card col-xl-4 col-md-5 mx-md-4 mx-xl-0 mb-4 bg-light me-2 shadow">
            <div>
              <span className="pt-5 bold">
                Order ID: 2345678ghjk56789gty9upihyo
              </span>
              <hr />
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Subscription:</span>
                <span>One time meal</span>
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
                <span>₹2000</span>
              </div>
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Payment type:</span>
                <span>COD</span>
              </div>
            </div>
          </div>
          <div className="order-card col-xl-4 col-md-5 mx-md-4 mx-xl-0 mb-4 bg-light me-2  shadow">
            <div>
              <span className="pt-5 bold">
                Order ID: 2345678ghjk56789gty9upihyo
              </span>
              <hr />
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Subscription:</span>
                <span>One time meal</span>
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
                <span>₹2000</span>
              </div>
              <div className="d-flex mb-2 justify-content-between">
                <span className="bold">Payment type:</span>
                <span>COD</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
