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
        
        
      </ul>
    </div>
  );
};

export default NurseSidebar;
