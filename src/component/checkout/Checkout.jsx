import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "./Checkout.css";
import { useActionState } from "react";
function Checkout() {
  const navigate = useNavigate();
  const uid = useSelector((state) => state.manageUserStatus.user.uid);
  const tiffinAddress = useSelector(
    (state) => state.managetAddressStatus.tiffinAddress
  );
  console.log("tiffin address: ", tiffinAddress);

  const [userAddress, setUserAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSummary, setOrderSummary] = useState({
    mealPlan: "Weekly Subscription",
    price: 1500,
  });
  const calculateEndDate = (startDate) => {
    const date = new Date(startDate);

    date.setDate(date.getDate() + 30); // Add 30 days to the start date
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;
    setStartDate(startDate);
    setEndDate(calculateEndDate(startDate));
  };
  const handlePlaceOrder = async () => {
    if (!userAddress || !startDate || !endDate || !paymentMethod) {
      alert("Please fill all the required fields!");
      return;
    } else {
      try {
        const response = await axios.patch(
          "http://localhost:8000/api/menu/order",
          {
            uid,
            userAddress,
            startDate,
            endDate,
            orderSummary,
            paymentMethod,
          }
        );
        toast.success(response.data)
        navigate("/Home")
      } catch (e) {
        console.log("error on sending order client req: ", e);
      }

      console.log(
        userAddress,
        "then\n",
        startDate,
        "then\n",
        endDate,
        "then\n",
        paymentMethod,
        "then\n",
        orderSummary
      );
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
        onClick={handlePlaceOrder}
        className="btn btn-success place-order-btn"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
