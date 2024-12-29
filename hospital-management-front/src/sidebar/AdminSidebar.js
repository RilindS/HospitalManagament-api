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
         <li>
          <Link to="/admin/allpatient">Manage Patients</Link>
        </li>
        {/* <li>
          <Link to="/admin/patient/add">Add Patient</Link>
        </li> */}
        {/* <li>
          <Link to="/admin/doctor">Manage Doctors</Link>
        </li>  */}
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
          <Link to="/">Log out</Link>
        </li>
        {/* /inventory/add */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
