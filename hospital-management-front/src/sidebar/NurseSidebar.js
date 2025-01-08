import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss"; // Importo stilizimin për sidebar

const NurseSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and auth token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");

    // Redirect to the login page (or home page)
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/nurse/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/nurse/email">Send Email</Link>
        </li>
        <li>
          <Link to="/nurse/allRoom">Room</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Log out
          </Link>
        </li>
        <li>
          <Link to="/nurse/room/patients">See patients in Room</Link>
        </li>
      </ul>
    </div>
  );
};

export default NurseSidebar;
