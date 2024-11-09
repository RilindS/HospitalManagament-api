import React from 'react';

const Sidebar = ({ onCreateUserClick, onCreateRoomClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={onCreateUserClick}>Create Doctor</li>
        <li onClick={onCreateRoomClick}>Create Room</li>
      </ul>
    </div>
  );
};

export default Sidebar;
