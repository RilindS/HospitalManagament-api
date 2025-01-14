import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const AdminSidebar = () => {
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
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/email">Send Email</Link>
        </li>
        <li>
          <Link to="/admin/allpatient">Manage Patients</Link>
        </li>
        <li>
          <Link to="/admin/doctor">Manage Doctors</Link>
        </li>
        <li>
          <Link to="/admin/allnurse">Manage Nurse</Link>
        </li>
        <li>
          <Link to="/admin/allRoom">Manage Room</Link>
        </li>
        <li>
          <Link to="/admin/allInventory">Manage Inventory</Link>
        </li>
        <li>
          <Link to="/admin/city">Manage City</Link>
        </li>
        <li>
          <Link to="/admin/room/patients">See patients in Room</Link>
        </li>
        <li>
          <Link to="/admin/feedback/nurse">See feedback for nurse</Link>
        </li>
        <li>
          <Link to="/admin/feedback/doctor">See feedback for doctors</Link>
        </li>
        <li>
          <Link to="/admin/vacation/nurse">See vacation for nurse</Link>
        </li>
        <li>
          <Link to="/admin/vacation/doctor">See vacation for doctors</Link>
        </li>
        <li>
          <Link to="/admin/Myprofile">My profile</Link>
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

export default AdminSidebar;
