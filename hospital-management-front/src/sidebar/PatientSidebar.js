import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";


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
        <li>
          <Link to="/patient/allDoctor">See Doctors</Link>
        </li> 
        <li>
          <Link to="/patient/allNurse">See Nurse</Link>
        </li> 
        <li>
          <Link to="/">Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default PatientSidebar;
