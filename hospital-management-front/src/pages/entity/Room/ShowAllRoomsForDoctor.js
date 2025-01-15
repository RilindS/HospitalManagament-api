import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRooms } from "../../../services/requests/rooms";

const ShowAllRoomsForDoctor = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await fetchAllRooms(); 
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
<div className="room-container">
  <h2 className="room-heading">All Rooms</h2>
  <table className="doctor-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Room Name</th>
        <th>Description</th>
        <th>Floor</th>
        <th>Number of Beds</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(rooms) && rooms.length > 0 ? (
        rooms.map((room) => (
          <tr key={room.id}>
            <td>{room.id}</td>
            <td>{room.roomName}</td>
            <td>{room.description || "N/A"}</td>
            <td>{room.floor}</td>
            <td>{room.nrOfBeds}</td>
            <td>{room.departament ? room.departament : "N/A"}</td>
            <td>
              <button
                className="view-patients-button details-button"
                onClick={() => navigate(`/doctor/room/${room.id}/patients`)}
              >
                Show All Patients in Room
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7">No rooms available.</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
};

export default ShowAllRoomsForDoctor;
