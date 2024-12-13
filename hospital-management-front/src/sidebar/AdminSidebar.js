import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";


const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        
        <li>
          <Link to="/admin/email">Send Email</Link>
        </li>
        {/* <li>
          <Link to="/admin/patient">Manage Patients</Link>
        </li>
        <li>
          <Link to="/admin/patient/add">Add Patient</Link>
        </li>
        <li>
          <Link to="/admin/doctor">Manage Doctors</Link>
        </li> */}
        <li>
          <Link to="/admin/allnurse">Manage Nurse</Link>
        </li>
        <li>
          <Link to="/">Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
