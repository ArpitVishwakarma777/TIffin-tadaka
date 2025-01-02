import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Wishlist from "./component/Wishlist/Wishlist.jsx";
import Layout from "./Layout.jsx";
import Menu from "./component/Menu/Menu.jsx";
import DailyTiffin from "./Tiffin Categories/DailyTiffin.jsx";
import WeeklyTiffin from "./Tiffin Categories/WeeklyTiffin.jsx";
import MonthlySubscription from "./Tiffin Categories/MonthlyTiffin.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Protected from "./component/SignUp/Protected.jsx";
import Checkout from "./component/checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Wishlist", element: <Wishlist /> },
      { path: "/Menu/Checkout", element: <Checkout /> },
      {
        path: "/Menu",
        element: <Protected Component={<Menu />} />,
        children: [
          { path: "/Menu/Daily", element: <DailyTiffin /> },
          { path: "/Menu/Weekly", element: <WeeklyTiffin /> },
          { path: "/Menu/Monthly", element: <MonthlySubscription /> },
        ],
      },
      { path: "/Contact", element: <Contact /> },
      // {path:'/Home/:Component',element:<Home/>}
    ],
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
  <RouterProvider router={router} />
);
