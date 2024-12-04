import React from 'react';

const Sidebar = ({ onCreateUserClick, onCreateRoomClick, onCreateCityClick,onCreateDoctorClick, onCreateNurseClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={onCreateUserClick}>Create Doctor</li>
        <li onClick={onCreateNurseClick}>Create Nurse</li>
        <li onClick={onCreateRoomClick}>Create Room</li>
        <li onClick={onCreateCityClick}>Create City</li>
        <li onClick={onCreateDoctorClick}>Show Doctor</li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
