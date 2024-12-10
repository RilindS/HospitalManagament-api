import React from 'react';

const Sidebar = ({ onCreateUserClick, onCreateRoomClick, onCreateCityClick,onCreateDoctorClick, onCreateNurseClick,onShowInventoryClick,onCreateInventoryClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={onCreateUserClick}>Create Doctor</li>
        <li onClick={onCreateNurseClick}>Create Nurse</li>
        <li onClick={onCreateRoomClick}>Create Room</li>
        <li onClick={onCreateCityClick}>Create City</li>
        <li onClick={onCreateDoctorClick}>Show Doctor</li>
        <li onClick={onCreateInventoryClick}>Create Inventory</li>
        <li onClick={onShowInventoryClick}>Show Inventory</li>

        {/* <li onClick={onCreateDoctorClick}>Show Inventory</li> */}

        
      </ul>
    </div>
  );
};

export default Sidebar;
