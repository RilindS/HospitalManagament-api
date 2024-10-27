import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginRegisterPage from './pages/LoginAndRegisterPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
