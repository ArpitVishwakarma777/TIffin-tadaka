import { Routes, Route } from "react-router-dom";

import ManageTiffins from "./ManageTiffins";
import Dashboard from "./Dashboard";
import UserManage from "./UserManage";
import ManageOrders from "./ManageOrders";
import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-xl-2 bg-dark text-white">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-9  col-xl-10 ">
          <Routes>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserManage />} />
            <Route path="orders" element={<ManageOrders />} />
            <Route path="manageTiffins" element={<ManageTiffins />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
