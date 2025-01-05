import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss"; // Importo stilizimin për sidebar


const NurseSidebar = () => {
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
          <Link to="/">Log out</Link>
         </li>
         <li>
          <Link to="/nurse/room/patients">See patients in Room</Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default NurseSidebar;
