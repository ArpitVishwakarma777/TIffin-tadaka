import { FaRegTrashAlt } from "react-icons/fa";
import "./AddToCart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShowCarts from "./ShowCarts.jsx";
import { useEffect } from "react";
function AddToCart() {
  const addedCarts = useSelector((state) => state.manageAddCartData.addedCarts);
  console.log("have carts : ", addedCarts);
  if (addedCarts.length === 0) {
    return (
      <div className="container">
        <div className="row  d-flex justify-content-center flex-wrap flex-xl-nowrap  ">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <img
              className="w-25  "
              src="https://res.cloudinary.com/drzc94rvk/image/upload/v1735739978/No_order_r3flr9.jpg"
              alt=""
            />
            <div className="fs-2 bold text-danger mb-5 ">
              Added Carts Empty
              <span className="blink">!</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <ShowCarts/>;
  }
}

export default AddToCart;
