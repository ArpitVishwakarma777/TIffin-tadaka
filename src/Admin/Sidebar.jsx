import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark text-white vh-50 pt-5">
      <h2 className="mb-4">Admin Panel</h2>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink 
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link text-warning" : "nav-link text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "nav-link text-warning" : "nav-link text-white"
            }
          >
            Users
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive ? "nav-link text-warning" : "nav-link text-white"
            }
          >
            Orders
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/admin/menu"
            className={({ isActive }) =>
              isActive ? "nav-link text-warning" : "nav-link text-white"
            }
          >
            Menu
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
