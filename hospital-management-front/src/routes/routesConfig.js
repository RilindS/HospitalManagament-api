import AdminDashboard from '../pages/adminPages/AdminDashboard';
import DoctorDashboard from '../pages/doctorPages/DoctorDashboard';
import EmailPage from '../pages/entity/email/EmailPage';
import CreateInventory from '../pages/entity/Inventory/CreateInventory';
import CreateInventoryRequest from '../pages/entity/Inventory/CreateInventoryRequest';


import EditInventory from '../pages/entity/Inventory/EditInventory';
import ShowInventory from '../pages/entity/Inventory/ShowInventory';
import AddNursePage from '../pages/entity/Nurse/AddNursePage';
import EditNursePage from '../pages/entity/Nurse/EditNursePage';
import ShowAllNurses from '../pages/entity/Nurse/ShowAllNurses';
import AddPatientPage from '../pages/entity/Patient/AddPatient';
import EditPatientPage from '../pages/entity/Patient/EditPatientPage';
import ShowAllPatients from '../pages/entity/Patient/ShowAllPatients';
import AddRoomPage from '../pages/entity/Room/AddRoomPage';
import EditRoomPage from '../pages/entity/Room/EditRoomPage';
import ShowAllRooms from '../pages/entity/Room/ShowAllRooms';
import NurseDashboard from '../pages/nursePages/NurseDashboard';
import PatientDashboard from '../pages/patientPages/PatientDashboard';




export const AdminRoutes = [
    
    { path: "/email", element: <EmailPage /> },
    { path: "/allnurse", element: <ShowAllNurses /> },
    { path: "/allpatient", element: <ShowAllPatients /> },
    { path: "/allInventory", element: <ShowInventory /> },

  { path: "/nurse/add", element: <AddNursePage /> },
  { path: "/patient/add", element: <AddPatientPage/>},
  { path: "/dashboard", element: <AdminDashboard /> },
  { path: "/", element: <AdminDashboard /> },
  { path: "/allRoom", element: <ShowAllRooms /> },
  { path: "/room/add", element: <AddRoomPage /> },
  { path: "/nurse/edit/:id", element: <EditNursePage /> }, 
  { path: "/patient/edit/:id", element: <EditPatientPage /> }, 
  { path: "/room/edit/:id", element: <EditRoomPage /> }, 
  { path: "/inventory/edit/:id", element: <EditInventory /> }, 

  { path: "/inventory/add", element: <CreateInventory /> }, 

     
  ];

export const DoctorRoutes = [
  { path: "/dashboard", element: <DoctorDashboard /> },
  { path: "/", element: <DoctorDashboard /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/inventory-request", element: <CreateInventoryRequest /> },




  // { path: "/", element: <DoctorHomePage /> },
 
];

export const PatientRoutes = [
  { path: "/dashboard", element: <PatientDashboard /> },
  { path: "/", element: <PatientDashboard /> },
  { path: "/email", element: <EmailPage /> },



  // { path: "/", element: <PatientHomePage /> },
  
];

export const NurseRoutes = [
  { path: "/dashboard", element: <NurseDashboard /> },
  { path: "/", element: <NurseDashboard /> },
  { path: "/email", element: <EmailPage /> },



  // { path: "/", element: <PatientHomePage /> },
  
];
