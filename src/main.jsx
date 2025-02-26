import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import CartItem from "./component/Cart/CartItem.jsx";
import Layout from "./Layout.jsx";
import Menu from "./component/Menu/Menu.jsx";
import DailyTiffin from "./Tiffin Categories/DailyTiffin.jsx";
import WeeklyTiffin from "./Tiffin Categories/WeeklyTiffin.jsx";
import MonthlySubscription from "./Tiffin Categories/MonthlyTiffin.jsx";
import ForgotPassword from "./Helper/ForgotPassword.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Protected from "./component/SignUp/Protected.jsx";
import Checkout from "./component/checkout/Checkout.jsx";
import ScrollToTop from "./Helper/ScrollToTop.jsx";
import AdminPage from "./Admin/AdminPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <ScrollToTop /> */}
        <Layout />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },

      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/CartItem", element: <CartItem /> },
      { path: "/ForgotPassword", element: <ForgotPassword /> },
      {
        path: "/Menu/Checkout/:type/:subscription/:price",
        element: <Checkout />,
      },
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
    ],
  },
  { path: "/admin/*", element: <AdminPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
