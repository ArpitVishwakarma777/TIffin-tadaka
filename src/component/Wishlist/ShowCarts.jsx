import React, { useState } from "react";
import { Card, Button, ListGroup, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateCart } from "../../RTK/slices";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ShowCarts= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = useSelector((state) => state.manageUserStatus.user.uid);
  const addedCarts = useSelector((state) => state.manageAddCartData.addedCarts);
  console.log("have carts : ", addedCarts);
  const shippingCost = 5.0;

  const handleRemoveCart = async (item) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_APP_URL}/api/menu/removeCart`,
        { item, uid }
      );
      if (res.status === 200) {
        dispatch(removeCart(item.id));
      } else {
        throw new Error("Failed to remove cart item");
      }
    } catch (e) {
      console.log(e);
      toast.error("Cart is not removed");
    }
  };

  const totalItems = addedCarts.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice =
    addedCarts.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    shippingCost;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-8">
          <Card>
            <Card.Header>
              <h4>Shopping Cart</h4>
              <span>{totalItems} items</span>
            </Card.Header>
            <ListGroup variant="flush">
              {addedCarts.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <img width="50" src={item.src} alt="" />
                  <div style={{ width: "20%" }}>
                    <strong>{item.title}</strong>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch(
                            updateCart({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          );
                        }
                      }}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => {
                        if (item.quantity < 5) {
                          dispatch(
                            updateCart({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          );
                        }
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <div>₹ {item.price * item.quantity}</div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      handleRemoveCart(item);
                    }}
                  >
                    ×
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>

        {/* Summary */}
        <div className="col-md-4">
          <Card>
            <Card.Header>
              <h4>Summary</h4>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>₹ {shippingCost.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <strong>Total Price</strong>
                <strong>₹ {totalPrice.toFixed(2)}</strong>
              </div>
              <Button
                onClick={() => {
                  navigate(`/Menu/Checkout/${"AddedCart"}/${"One Time Meal"}/${totalPrice}`);
                }}
                variant="primary"
                className="mt-3 w-75 "
              >
                Order Now !
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShowCarts;
