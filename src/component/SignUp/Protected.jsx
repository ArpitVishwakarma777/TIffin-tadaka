// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { setShowLogin } from "../../RTK/slices";
// import Home from "../Home/Home";
// function Protected({ Component }) {

//   const location = useLocation();
//   const previousPathname = React.useRef(null); 
//   const loginStatus = useSelector(
//     (state) => state.manageLoginStatus.loginStatus
//   );
//   console.log(previousPathname.current);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   React.useEffect(() => {
//     if (loginStatus === "SignUp") {
//       dispatch(setShowLogin(true));
//     }
//   }, []);

//   return <>{loginStatus === "SignUp" ?navigate('/Home') : Component}</>;
// }

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
