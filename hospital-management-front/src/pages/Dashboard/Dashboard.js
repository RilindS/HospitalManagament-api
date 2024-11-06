// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.scss'; 

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/'); 
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <ul> 
//           <li>Create Doctor</li>
//         </ul>
//       </div>
//       <div className="content">
//         <div className="header">
//           <h1>Welcome to the Dashboard!</h1>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//         <p>You are now logged in.</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import Sidebar from './SideBar';
import CreateDoctorModal from './Doctor/CreateDoctorModal';
import CreateUserModal from './CreateUserModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isDoctorModalVisible, setIsDoctorModalVisible] = useState(false);

  console.log('isUserModalVisible',isUserModalVisible)

  const handleLogout = () => {
    navigate('/');
  };

  const showCreateUserModal = () => {
    setIsUserModalVisible(true);
  };

  const handleUserCreate = (values) => {
    console.log("User data:", values);
    setIsUserModalVisible(false);
    setIsDoctorModalVisible(true);
  };

  const handleDoctorCreate = (values) => {
    console.log("Doctor data:", values);
    setIsDoctorModalVisible(false);
  };

  return (
    <div className="dashboard">
      <Sidebar onCreateUserClick={showCreateUserModal} />
      <div className="content">
        <div className="header">
          <h1>Welcome to the Dashboard!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <p>You are now logged in.</p>
      </div>

      <CreateUserModal 
        visible={isUserModalVisible} 
        onCancel={() => setIsUserModalVisible(false)} 
        onCreate={handleUserCreate} 
      />
      <CreateDoctorModal 
        visible={isDoctorModalVisible} 
        onCancel={() => setIsDoctorModalVisible(false)} 
        onCreate={handleDoctorCreate} 
      />
    </div>
  );
};

export default Dashboard;
