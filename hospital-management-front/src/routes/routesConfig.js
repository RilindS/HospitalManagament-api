import AdminDashboard from '../pages/adminPages/AdminDashboard';
import DoctorDashboard from '../pages/doctorPages/DoctorDashboard';
import EmailPage from '../pages/entity/email/EmailPage';
import AddNursePage from '../pages/entity/Nurse/AddNursePage';
import EditNursePage from '../pages/entity/Nurse/EditNursePage';
import ShowAllNurses from '../pages/entity/Nurse/ShowAllNurses';
import NurseDashboard from '../pages/nursePages/NurseDashboard';
import PatientDashboard from '../pages/patientPages/PatientDashboard';



export const AdminRoutes = [
    
    { path: "/email", element: <EmailPage /> },
    { path: "/allnurse", element: <ShowAllNurses /> },
  { path: "/nurse/add", element: <AddNursePage /> },
  { path: "/dashboard", element: <AdminDashboard /> },
  { path: "/", element: <AdminDashboard /> },


  { path: "/nurse/edit/:id", element: <EditNursePage /> }, 

     
  ];

export const DoctorRoutes = [
  { path: "/dashboard", element: <DoctorDashboard /> },
  { path: "/", element: <DoctorDashboard /> },
  { path: "/email", element: <EmailPage /> },



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
