import React from 'react';

const Sidebar = ({ onCreateUserClick, onCreateRoomClick, onCreateCityClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={onCreateUserClick}>Create Doctor</li>
        <li onClick={onCreateRoomClick}>Create Room</li>
        <li onClick={onCreateCityClick}>Create City</li>
      </ul>
    </div>
  );
};

export default Sidebar;
