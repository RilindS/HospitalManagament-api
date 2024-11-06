import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegisterPage from './pages/LoginAndRegisterPage';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
