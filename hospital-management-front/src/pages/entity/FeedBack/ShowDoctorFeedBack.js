import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../services/requests/auth';
import { deleteFeedback, fetchAllFeedBacks } from '../../../services/requests/inventory';


const ShowDoctorFeedBack = () => {
  const [feedbacks, setFeedBacks] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetchAllFeedBacks();
      setFeedBacks(response.data);
    };
    fetchFeedbacks();
    getUserData();
  }, []);

  // Handle edit inventory item
  const handleEdit = (feedbackId) => {
    navigate(`/admin/feedback/edit/${feedbackId}`);
  };

  // Handle delete inventory item
  const handleDelete = async (feedbackId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this feedback?');
    if (confirmDelete) {
      try {
        await deleteFeedback(feedbackId);
        // Refresh the inventory list after deleting
        const updatedInventory = feedbacks.filter(item => item.id !== feedbackId);
        setFeedBacks(updatedInventory);
      } catch (error) {
        console.error('Error deleting inventory:', error);
      }
    }
  };

  return (
    <div className="show-doctor">
      <h2>All Feedbacks</h2>
      <button className="add-button" onClick={() => navigate("/admin/feedback/add")}>
        Add FeedBack
      </button>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Rating</th>
            <th>Doctor</th>
            <th>Nurse</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedBack, index) => (
            <tr key={index}>
              <td>{feedBack.comment}</td>
              <td>{feedBack.rating}</td>
              <td>{feedBack.doctorId}</td>
              <td>{feedBack.nurseId}</td>
              <td>
                <button onClick={() => handleEdit(feedBack.id)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(feedBack.id)}className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDoctorFeedBack;
