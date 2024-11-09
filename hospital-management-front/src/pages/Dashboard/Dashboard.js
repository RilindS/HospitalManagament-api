import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import Sidebar from './SideBar';
import CreateDoctorModal from './Doctor/CreateDoctorModal';
import CreateUserModal from './CreateUserModal';
import CreateRoomModal from './Room/CreateRoom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isDoctorModalVisible, setIsDoctorModalVisible] = useState(false);
  const [isRoomModalVisible, setIsRoomModalVisible] = useState(false); // Room modal state

  const handleLogout = () => {
    navigate('/');
  };

  const showCreateUserModal = () => {
    setIsUserModalVisible(true);
  };

  const showCreateRoomModal = () => {
    setIsRoomModalVisible(true);
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

  const handleRoomCreate = (values) => {
    console.log("Room data:", values);
    setIsRoomModalVisible(false);
  };

  return (
    <div className="dashboard">
      <Sidebar 
        onCreateUserClick={showCreateUserModal} 
        onCreateRoomClick={showCreateRoomModal} // Pass room modal function
      />
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
      <CreateRoomModal 
        visible={isRoomModalVisible} 
        onCancel={() => setIsRoomModalVisible(false)} 
        onCreateComplete={handleRoomCreate}
      />
    </div>
  );
};

export default Dashboard;
