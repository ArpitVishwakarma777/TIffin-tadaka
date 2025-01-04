import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserSubscription,setUser } from "../../RTK/slices";

import "./Checkout.css";
import { useActionState } from "react";
function Checkout() {
  const { subscription, price } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.manageUserStatus.user.uid);
  const tiffinAddress = useSelector(
    (state) => state.managetAddressStatus.tiffinAddress
  );
   
  const user = useSelector((state) => state.manageUserStatus.user);

  const [userAddress, setUserAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSummary, setOrderSummary] = useState({
    mealPlan: subscription,
    price: price,
  });
  const calculateEndDate = (startDate, category) => {
    const date = new Date(startDate);

    if (category === "monthly") {
      date.setDate(date.getDate() + 30); // Add 30 days for monthly
    } else if (category === "weekly") {
      date.setDate(date.getDate() + 7); // Add 7 days for weekly
    } else if (category === "oneday") {
      date.setDate(date.getDate() + 0); // No change for one-day
    }

    // Format as YYYY-MM-DD
    return date.toISOString().split("T")[0];
  };
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    setStartDate(startDate);
    // console.log("first: ", subscription);

    if (subscription === "Weekly Subscription") {
      // console.log("second: ", subscription);
      setEndDate(calculateEndDate(startDate, "weekly"));
    } else if (subscription === "Monthly Subscription") {
      setEndDate(calculateEndDate(startDate, "monthly"));
    } else {
      setEndDate(calculateEndDate(startDate, "oneday"));
    }
  };
  function generateOrderID() {
    let randomID =
      Math.random().toString(36).substring(2) +
      Math.random().toString(36).substring(2);
    return randomID;
  }

  //payment integration

  const handleRazorpayPayment = async () => {
    try {
      // Create Order
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}/api/menu/createOrder`,
        {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: orderSummary.price, // Amount in rupees
            currency: "INR",
          }),
        }
      );

      const { order } = await response.json();
      console.log("result : ", order);
      const options = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Tiffin Tadaka",
        description: "Order Payment",
        order_id: order.id,
        handler: async (response) => {
          try {
            // Verify Payment
            const verificationResponse = await fetch(
              `${import.meta.env.VITE_APP_URL}/api/menu/verifyPayment`,
              {
                method: "POST",

                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              }
            );

            const result = await verificationResponse.json();
            console.log("result : ", result);

            if (result.success) {
              handlePlaceOrder();
            } else {
              toast.error("Payment verification failed!");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error("Error verifying payment.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.mobile,
        },
        theme: {
          color: "#dc2626",
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in Razorpay payment:", error);
      toast.error("Error initiating payment.");
    }
  };

  const hendlePlaceOrderButton = () => {
    if (!userAddress || !startDate || !endDate || !paymentMethod) {
      alert("Please fill all the required fields!");
      return;
    } else {
    }
    if (paymentMethod == "Credit/Debit Card") {
      handleRazorpayPayment();
    } else {
      handlePlaceOrder();
    }
  };

  const handlePlaceOrder = async () => {
    if (!userAddress || !startDate || !endDate || !paymentMethod) {
      alert("Please fill all the required fields!");
      return;
    } else {
      try {
        const orderid = generateOrderID();
        // console.log("order id : ", orderid);

        const response = await axios.patch(
          `${import.meta.env.VITE_APP_URL}/api/menu/order`,
          {
            uid,
            orderid,
            userAddress,
            startDate,
            endDate,
            orderSummary,
            paymentMethod,
          }
        );
        dispatch(
          setUserSubscription({
            orderid,
            userAddress,
            startDate,
            endDate,
            orderSummary,
            paymentMethod,
          })
        );
        toast.success(response.data);
        navigate("/Home");
      } catch (e) {
        console.log("error on sending order client req: ", e);
      }
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      {/* User Address */}
      <div className="form-group">
        <label htmlFor="userAddress">Your Address:</label>
        <textarea
          id="userAddress"
          placeholder="Enter your delivery address"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="form-control"
        ></textarea>
      </div>

      {/* Tiffin Service Address */}
      <div className="form-group">
        <label htmlFor="tiffinAddress">Tiffin Service Address:</label>
        <input
          id="tiffinAddress"
          type="text"
          value={tiffinAddress[0].address}
          disabled
          className="form-control disabled-input"
        />
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h4>Order Summary</h4>
        <p>
          <strong>Meal Plan:</strong> {orderSummary.mealPlan}
        </p>
        <p>
          <strong>Price:</strong> ₹{orderSummary.price}
        </p>
      </div>

      {/* Date of Buying and Ending */}
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          id="endDate"
          type="date"
          disabled
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Payment Method */}
      <div className="form-group">
        <label className="mb-3">Payment Method:</label>
        <div className="payment-options">
          <div>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="Credit/Debit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="card">Credit/Debit Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={hendlePlaceOrderButton}
        className="btn btn-success place-order-btn"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
