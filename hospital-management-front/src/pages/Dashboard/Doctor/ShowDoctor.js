import React, { useEffect, useState } from 'react';
import { fetchAllDoctors } from '../../../services/requests/doctor';
import "./create.scss"

const ShowDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetchAllDoctors();
      setDoctors(response.data);
    };
    fetchDoctors();
  }, []);

  return (
    <div className="show-doctor">
      <h2>All Doctors</h2>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Specialization</th>
            <th>Qualification</th>
            <th>Is Active</th>
            <th>Department Name</th>
            <th>City Name</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.firstName}</td>
              <td>{doctor.lastName}</td>
              <td>{doctor.age}</td>
              <td>{doctor.gender}</td>
              <td>{doctor.phoneNumber}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.isActive ? 'Yes' : 'No'}</td>
              <td>{doctor.departamentName}</td>
              <td>{doctor.cityName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDoctor;
