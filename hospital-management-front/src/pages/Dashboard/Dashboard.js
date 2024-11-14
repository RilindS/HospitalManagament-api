import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import Sidebar from './SideBar';
import CreateDoctorModal from './Doctor/CreateDoctorModal';
import CreateUserModal from './CreateUserModal';
import CreateRoomModal from './Room/CreateRoom';
import CreateCityModal from './City/CreateCity';
import { fetchAllDoctors } from '../../services/requests/doctor';
import ShowDoctor from './Doctor/ShowDoctor';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isDoctorModalVisible, setIsDoctorModalVisible] = useState(false);
  const [isRoomModalVisible, setIsRoomModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);
  const [view, setView] = useState('home'); // Track the current view (default to 'home')
  const [data, setData] = useState({});

  const handleLogout = () => {
    navigate('/');
  };

  const showCreateUserModal = () => {
    setIsUserModalVisible(true);
  };

  const showCreateRoomModal = () => {
    setIsRoomModalVisible(true);
  };

  const showCreateCityModal = () => {
    setIsCityModalVisible(true);
  };

  const showDoctorView = () => {
    setView('showDoctor');
  };

  const showHomeView = () => {
    setView('home');
  };

  const handleUserCreate = (values) => {
    setIsUserModalVisible(false);
    setIsDoctorModalVisible(true);
    setData(values);
  };

  const handleDoctorCreate = (values) => {
    setIsDoctorModalVisible(false);
  };

  const handleRoomCreate = (values) => {
    setIsRoomModalVisible(false);
  };

  const handleCityCreate = (values) => {
    setIsCityModalVisible(false);
  };

  useEffect(() => {
    fetchAllDoctors();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar 
        onCreateUserClick={showCreateUserModal} 
        onCreateRoomClick={showCreateRoomModal}
        onCreateCityClick={showCreateCityModal}
        onCreateDoctorClick={showDoctorView}
      />
      <div className="content">
        <div className="header">
          <h1>Welcome to the Dashboard!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        {view === 'home' ? (
          <p>You are now logged in.</p>
        ) : view === 'showDoctor' ? (
          <ShowDoctor />
        ) : null}
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
        initialData={data}
      />
      <CreateRoomModal 
        visible={isRoomModalVisible} 
        onCancel={() => setIsRoomModalVisible(false)} 
        onCreateComplete={handleRoomCreate}
      />
      <CreateCityModal
        visible={isCityModalVisible} 
        onCancel={() => setIsCityModalVisible(false)} 
        onCreateComplete={handleCityCreate}
      />
    </div>
  );
};

export default Dashboard;
