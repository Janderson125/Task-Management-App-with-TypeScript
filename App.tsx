// Typescript 2/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskDashboard from './pages/TaskDashboard';
import TaskDetails from './pages/TaskDetails';
import TaskForm from './pages/TaskForm';      // Note capital 'T' and 'F'
import AuthCallback from './pages/AuthCallback'; // Optional

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskDashboard />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
};

export default App;
