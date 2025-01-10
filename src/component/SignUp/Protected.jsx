

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setShowLogin } from "../../RTK/slices";

function Protected({ Component }) {
  const location = useLocation();
  const loginStatus = useSelector(
    (state) => state.manageLoginStatus.loginStatus
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (loginStatus === "SignUp") {
      dispatch(setShowLogin(true));
      navigate('/Home'); // Move navigate here
    }
  }, [loginStatus, dispatch, navigate]); // Add dependencies

  return <>{loginStatus === "SignUp" ? null : Component}</>; // Render null if signed up
}


export default Protected;
