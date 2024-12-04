import React, { useEffect, useState } from 'react';
import { fetchAllNurses } from '../../../services/requests/nurse';
import "./create.scss"

const ShowNurse = () => {
  const [nurse, setNurse] = useState([]);

  useEffect(() => {
    const fetchNurses = async () => {
      const response = await fetchAllNurses();
      setNurse(response.data);
    };
    fetchNurses();
  }, []);

  return (
    <div className="show-doctor">
      <h2>All Nurses</h2>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            {/* <th>Specialization</th> */}
            {/* <th>Qualification</th> */}
            <th>Is Active</th>
            <th>Department Name</th>
            <th>City Name</th>
            <th>Room Id</th>
          </tr>
        </thead>
        <tbody>
          {nurse.map((doctor, index) => (
            <tr key={index}>
              <td>{nurse.firstName}</td>
              <td>{nurse.lastName}</td>
              <td>{nurse.age}</td>
              <td>{nurse.gender}</td>
              <td>{nurse.phoneNumber}</td>
              <td>{nurse.isActive ? 'Yes' : 'No'}</td>
              <td>{nurse.departamentName}</td>
              <td>{nurse.cityName}</td>
              <td>{nurse.roomId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowNurse;
