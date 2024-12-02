import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import SignPage from "./component/SignUp/SignPage.jsx";
import Layout from "./Layout.jsx";
  
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "SignUp",
    element: <SignPage />,
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path ="/" element={<Layout/>}
//     >
//       <Route path="" element={<Home/>}/>
//       <Route path="About" element={<About/>}/>

//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
