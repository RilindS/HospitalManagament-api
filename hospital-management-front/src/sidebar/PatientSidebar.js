import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss"; // Importo stilizimin për sidebar


const PatientSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/patient/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/patient/email">Send Email</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default PatientSidebar;
