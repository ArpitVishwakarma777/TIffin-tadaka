import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setShowLogin } from "../../RTK/slices";

function Protected({ Component }) {
  const uid = localStorage.getItem('userId')
  console.log("uid is here on menu component");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!uid) {
      dispatch(setShowLogin(true));
      navigate("/Home"); // Move navigate here
    }
  }, []); // Add dependencies

  return <>{!uid ? null : Component}</>; // Render null if signed up
}

export default Protected;
