import React from 'react';

const Sidebar = ({ onCreateUserClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={onCreateUserClick}>Create Doctor</li>
      </ul>
    </div>
  );
};

export default Sidebar;
