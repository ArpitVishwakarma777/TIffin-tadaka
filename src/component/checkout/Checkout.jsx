import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserSubscription } from "../../RTK/slices";
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
    } else{
      setEndDate(calculateEndDate(startDate, "oneday"));
    }
  };
  function generateOrderID() {
    let randomID = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
    return randomID;
  }
  const handlePlaceOrder = async () => {
    if (!userAddress || !startDate || !endDate || !paymentMethod) {
      alert("Please fill all the required fields!");
      return;
    } else {
      const isConfirmed = confirm("Are you ready to place the order");
      if (isConfirmed) {

        try {
          const orderid =  generateOrderID()
          console.log("oredr id : ",orderid);
          
          const response = await axios.patch(
            "http://localhost:8000/api/menu/order",
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
      } else {
        alert("order is cancelled");
        navigate("/Menu");
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
        onClick={handlePlaceOrder}
        className="btn btn-success place-order-btn"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
