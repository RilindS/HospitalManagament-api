import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";


const DoctorSidebar = () => {
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
          <Link to="/">Log out</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default DoctorSidebar;
