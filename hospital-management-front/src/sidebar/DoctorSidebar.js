import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const DoctorSidebar = () => {
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
          <Link to="/doctor/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/doctor/email">Send Email</Link>
        </li>
        <li>
          <Link to="/doctor/inventory-request">Manage Inventory</Link>
        </li>
        <li>
          <Link to="/doctor/allRoom">Room</Link>
        </li>
        <li>
          <Link to="/doctor/room/patients">See patients in Room</Link>
        </li>
        <li>
          <Link to="/doctor/appointments">All Appointments</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DoctorSidebar;
