import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllDoctors } from '../../services/requests/doctor';
import CreateCityModal from './City/CreateCity';
import CreateUserModal from './CreateUserModal';
import './Dashboard.scss';
import CreateDoctorModal from './Doctor/CreateDoctorModal';
import ShowDoctor from './Doctor/ShowDoctor';
import CreateInventoryModal from './Inventory/CreateInventory';
import CreateNurseModal from './Nurse/CreateNurseModal';
import CreateRoomModal from './Room/CreateRoom';
import Sidebar from './SideBar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isDoctorModalVisible, setIsDoctorModalVisible] = useState(false);
  const [isRoomModalVisible, setIsRoomModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);
  const [isNurseModalVisible, setIsNurseModalVisible] = useState(false); // Added missing state
  const [isInventoryModalVisible, setIsInventoryModalVisible] = useState(false);

  const [view, setView] = useState('home');
  const [data, setData] = useState({});

  const handleLogout = () => {
    navigate('/');
  };

  const showCreateUserModal = () => {
    setIsUserModalVisible(true);
  };
  const showCreateInventoryModal = () => {
    setIsInventoryModalVisible(true);
  };

  const showCreateRoomModal = () => {
    setIsRoomModalVisible(true);
  };

  const showCreateCityModal = () => {
    setIsCityModalVisible(true);
  };

  const showCreateNurseModal = () => {
    setIsNurseModalVisible(true);
  };

  const showNurseView = () => {
    setView('showNurse');
  };

  const showDoctorView = () => {
    setView('showDoctor');
  };
  const showInventoryView = () => {
    setView('shoeInventory');
  };

  const showHomeView = () => {
    setView('home');
  };

  const handleUserCreate = (values) => {
    setIsUserModalVisible(false);
    setIsDoctorModalVisible(true);
    setData(values);
  };
  const handleInventoryCreate = (values) => {
    setIsInventoryModalVisible(false);
    setData(values);
  };

  const handleDoctorCreate = (values) => {
    setIsDoctorModalVisible(false);
  };

  const handleNurseCreate = (values) => {
    setIsNurseModalVisible(false);
  };

  const handleRoomCreate = (values) => {
    setIsRoomModalVisible(false);
  };

  const handleCityCreate = (values) => {
    setIsCityModalVisible(false);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        await fetchAllDoctors();
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar 
        onCreateUserClick={showCreateUserModal} 
        onCreateRoomClick={showCreateRoomModal}
        onCreateCityClick={showCreateCityModal}
        onCreateNurseClick={showCreateNurseModal}
        onCreateDoctorClick={showDoctorView}
        onShowInventoryClick={showInventoryView}
        onCreateInventoryClick={showCreateInventoryModal}
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
        )  : null}
      </div>

      <CreateUserModal 
        visible={isUserModalVisible} 
        onCancel={() => setIsUserModalVisible(false)} 
        onCreate={handleUserCreate} 
      />
      <CreateInventoryModal 
        visible={isInventoryModalVisible} 
        onCancel={() => setIsInventoryModalVisible(false)} 
        onCreate={handleInventoryCreate} 
      />
      <CreateDoctorModal 
        visible={isDoctorModalVisible} 
        onCancel={() => setIsDoctorModalVisible(false)} 
        onCreate={handleDoctorCreate} 
        initialData={data}
      />
      <CreateNurseModal 
        visible={isNurseModalVisible} 
        onCancel={() => setIsNurseModalVisible(false)} 
        onCreate={handleNurseCreate} 
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
