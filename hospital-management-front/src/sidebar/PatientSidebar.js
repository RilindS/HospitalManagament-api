import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";

const PatientSidebar = () => {
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
          <Link to="/patient/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/patient/email">Send Email</Link>
        </li>
        <li>
          <Link to="/patient/allDoctor">See Doctors</Link>
        </li>
        <li>
          <Link to="/patient/allNurse">See Nurses</Link>
        </li>
        <li>
          <Link to="/patient/feedback/nurse">See Nurses feedback</Link>
        </li>
        <li>
          <Link to="/patient/feedback/create">Give FeedBack for nurse</Link>
        </li>
        <li>
          <Link to="/patient/feedback/createDoctor">Give FeedBack for doctor</Link>
        </li>
    
        <li>
          <Link to="/patient/reserveDoctor">Reserve Doctor</Link>
        </li> 
        
        <li>
          <Link to="/patient/show-diagnosis">Show Diagnosis</Link>
        </li> 
       
        <li>
          <Link to="/patient/Myprofile">My profile</Link>
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

export default PatientSidebar;
