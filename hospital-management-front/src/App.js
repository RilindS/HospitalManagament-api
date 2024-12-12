import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from "./pages/Dashboard/Dashboard";
import EmailPage from './pages/Dashboard/email/EmailPage';
import LoginRegisterPage from './pages/LoginAndRegisterPage';
import CreatePatientModal from './pages/Dashboard/Patient/CreatePatientModal';

const token = localStorage.getItem('authToken');

if(!token){
 
}


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/addpatient" element={<CreatePatientModal />} />
      
      <Route path="/dashboard" element={<PrivateRoute allowedRoles={['USER','DOCTOR','Patient','Admin']} />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
