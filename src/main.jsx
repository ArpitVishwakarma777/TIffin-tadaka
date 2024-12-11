import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import SignPage from "./component/SignUp/SignPage.jsx";
import Layout from "./Layout.jsx";
import Menu from './component/Menu/Menu.jsx'
import Profile from './component/Profile/Profile.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Protected from "./component/SignUp/Protected.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      {path:'/Menu',element:<Protected Component={<Menu/>}/>},
      {path:'/Contact',element:<Contact/>},
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
