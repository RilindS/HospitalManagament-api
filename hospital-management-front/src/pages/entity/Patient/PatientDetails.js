import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPatientById } from "../../../services/requests/patient";

const formatDate = (dateArray) => {
    // Assuming dateArray format: [year, month, day, ...]
    const date = new Date(Date.UTC(dateArray[0], dateArray[1] - 1, dateArray[2]));
    return date.toLocaleDateString('en-CA');  // "en-CA" format will return yyyy-mm-dd
  };
const PatientDetails = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
  
    useEffect(() => {
      const getPatientDetails = async () => {
        try {
          const response = await fetchPatientById(id);
          const data = response.data;
          
          // Format the dates here if needed
          if (data.createdAt) {
            data.createdAt = formatDate(data.createdAt);
          }
          if (data.appointments) {
            data.appointments.forEach((appointment) => {
              if (appointment.date) {
                appointment.date = formatDate(appointment.date);
              }
            });
          }
  
          setPatient(data);
        } catch (error) {
          console.error("Error fetching patient details:", error);
        }
      };
      getPatientDetails();
    }, [id]);
  
    if (!patient) {
      return <p>Loading patient details...</p>;
    }
  
  return (
    <div className="patient-details-container">
      <h2>Patient Details</h2>
      <p><strong>ID:</strong> {patient.id}</p>
      <p><strong>Name:</strong> {patient.firstName} {patient.lastName}</p>
      <p><strong>Email:</strong> {patient.email || "N/A"}</p>
      <p><strong>Phone Number:</strong> {patient.phoneNumber || "N/A"}</p>
      <p><strong>Street:</strong> {patient.street || "N/A"}</p>
      <p><strong>City:</strong> {patient.cityName || "N/A"}</p>
      <p><strong>Room Name:</strong> {patient.roomName || "N/A"}</p>
      <p><strong>Date of Birth:</strong> {patient.dateOfBirth || "N/A"}</p>
      <p><strong>Age:</strong> {patient.age || "N/A"}</p>
      <p><strong>Created At:</strong> {patient.createdAt}</p>

      <h3>Appointments</h3>
      {patient.appointments && patient.appointments.length > 0 ? (
        <ul>
          {patient.appointments.map((appointment) => (
            <li key={appointment.id}>
              <strong>Date:</strong> {appointment.date} <br />
              <strong>Reason:</strong> {appointment.reason} <br />
              <strong>Status:</strong> {appointment.status} <br />
              <strong>Doctor:</strong> {appointment.doctorName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}

      <h3>Diagnoses</h3>
      {patient.diagnoses && patient.diagnoses.length > 0 ? (
        <ul>
          {patient.diagnoses.map((diagnosis) => (
            <li key={diagnosis.id}>
                <strong>Diagnosis </strong> <br />
              <strong>Diagnosis Details:</strong> {diagnosis.diagnosisDetails} <br />
              <strong>Treatment Plan:</strong> {diagnosis.treatmentPlan} <br />
              <strong>Doctor:</strong> {diagnosis.doctorName} <br />
              {/* <strong>Appointment Date:</strong> {diagnosis.appointmentDate} */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No diagnoses available.</p>
      )}
    </div>
  );
};

export default PatientDetails;
