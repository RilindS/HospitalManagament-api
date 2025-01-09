import AdminDashboard from '../pages/adminPages/AdminDashboard';
import DoctorDashboard from '../pages/doctorPages/DoctorDashboard';
import EmailPage from '../pages/entity/email/EmailPage';
import CreateInventory from '../pages/entity/Inventory/CreateInventory';
import CreateInventoryRequest from '../pages/entity/Inventory/CreateInventoryRequest';


import AllAppointments from '../pages/entity/Appointments/AllAppointments';
import CreateCity from '../pages/entity/City/CreateCity';
import ManageCity from '../pages/entity/City/ManageCity';
import CreateDoctor from '../pages/entity/Doctor/CreateDoctor';
import ShowDoctor from '../pages/entity/Doctor/ShowDoctor';
import CreateFeedBack from '../pages/entity/FeedBack/CreateFeedBack';
import CreateFeedBackDoctor from '../pages/entity/FeedBack/CreateFeedBackDoctor';
import DoctorFeedback from '../pages/entity/FeedBack/DoctorFeedBack';
import NurseFeedback from '../pages/entity/FeedBack/NurseFeedback';
import EditInventory from '../pages/entity/Inventory/EditInventory';
import ShowInventory from '../pages/entity/Inventory/ShowInventory';
import AddNursePage from '../pages/entity/Nurse/AddNursePage';
import EditNursePage from '../pages/entity/Nurse/EditNursePage';
import ShowAllNurses from '../pages/entity/Nurse/ShowAllNurses';
import AddPatientPage from '../pages/entity/Patient/AddPatient';
import EditPatientPage from '../pages/entity/Patient/EditPatientPage';
import PatientDetails from '../pages/entity/Patient/PatientDetails';
import ShowAllPatients from '../pages/entity/Patient/ShowAllPatients';
import AddRoomPage from '../pages/entity/Room/AddRoomPage';
import EditRoomPage from '../pages/entity/Room/EditRoomPage';
import RoomPatients from '../pages/entity/Room/RoomPatients';
import ShowAllRooms from '../pages/entity/Room/ShowAllRooms';
import ShowAllRoomsForNurse from '../pages/entity/Room/ShowAllRoomsForNurse';
import ViewPatientsInRoom from '../pages/entity/Room/ViewPatientsInRoom';
import NurseDashboard from '../pages/nursePages/NurseDashboard';
import PatientDashboard from '../pages/patientPages/PatientDashboard';
import CreateAppointmentForm from '../pages/patientPages/ReserveDoctor';
import SeeDoctors from '../pages/patientPages/SeeDoctors';
import SeeNurse from '../pages/patientPages/SeeNurse';




export const AdminRoutes = [
    { path: "/email", element: <EmailPage /> },
    { path: "/allnurse", element: <ShowAllNurses /> },
    { path: "/allpatient", element: <ShowAllPatients /> },
    { path: "/allInventory", element: <ShowInventory /> },
  { path: "/nurse/add", element: <AddNursePage /> },
  { path: "/patient/add", element: <AddPatientPage /> },
  { path: "/dashboard", element: <AdminDashboard /> },
  { path: "/", element: <AdminDashboard /> },
  { path: "/allRoom", element: <ShowAllRooms /> },
  { path: "/room/add", element: <AddRoomPage /> },
  { path: "/inventory/edit/:id", element: <EditInventory /> }, 

  { path: "/inventory/add", element: <CreateInventory /> }, 

  { path: "/nurse/edit/:id", element: <EditNursePage /> },
  { path: "/patient/edit/:id", element: <EditPatientPage /> },
  { path: "/room/edit/:id", element: <EditRoomPage /> },
  { path: "/doctor", element: <ShowDoctor /> },
  { path: "/doctor/add", element: <CreateDoctor /> },
  { path: "/city", element: <ManageCity /> },
  { path: "/city/create", element: <CreateCity /> },
  { path: "room/:roomId/patients", element: <ViewPatientsInRoom /> },
  { path: "patient/details/:id", element: <PatientDetails /> },
  { path: "/room/patients", element: <RoomPatients /> },
  { path: "/feedback/nurse", element: <NurseFeedback /> },
  { path: "/feedback/doctor", element: <DoctorFeedback /> },




  


];

export const DoctorRoutes = [
  { path: "/dashboard", element: <DoctorDashboard /> },
  { path: "/", element: <DoctorDashboard /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/inventory-request", element: <CreateInventoryRequest /> },
  { path: "room/:roomId/patients", element: <ViewPatientsInRoom /> },
  { path: "/allRoom", element: <ShowAllRoomsForNurse /> },
  { path: "/room/patients", element: <RoomPatients /> },
  { path: "/appointments", element: <AllAppointments /> },



  // { path: "/", element: <DoctorHomePage /> },
 
];

export const PatientRoutes = [
  { path: "/dashboard", element: <PatientDashboard /> },
  { path: "/", element: <PatientDashboard /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/allDoctor", element: <SeeDoctors /> },
  { path: "/allNurse", element: <SeeNurse /> },
  { path: "/feedback/nurse", element: <NurseFeedback /> },
  { path: "/feedback/create", element: <CreateFeedBack /> },
  { path: "/feedback/createDoctor", element: <CreateFeedBackDoctor /> },
  { path: "/reserveDoctor", element: <CreateAppointmentForm /> },





  // { path: "/", element: <PatientHomePage /> },
  
];

export const NurseRoutes = [
  { path: "/dashboard", element: <NurseDashboard /> },
  { path: "/", element: <NurseDashboard /> },
  { path: "/email", element: <EmailPage /> },
  { path: "room/:roomId/patients", element: <ViewPatientsInRoom /> },
  { path: "/allRoom", element: <ShowAllRoomsForNurse /> },
  { path: "/room/patients", element: <RoomPatients /> },
  { path: "/room/:roomId/patients", element: <ViewPatientsInRoom /> },




  // { path: "/", element: <PatientHomePage /> },
  
];
