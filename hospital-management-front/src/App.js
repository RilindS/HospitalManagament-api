import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginRegisterPage from './pages/LoginAndRegisterPage';
import Dashboard from "./pages/Dashboard/Dashboard"
import PrivateRoute from './components/PrivateRoute';

const token = localStorage.getItem('authToken');

if(!token){
 
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/dashboard" element={<PrivateRoute allowedRoles={['USER','DOCTOR','Patient','Admin']} />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
