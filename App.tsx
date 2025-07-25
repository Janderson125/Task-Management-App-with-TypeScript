// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TaskDashboard from "./pages/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import TaskForm from "./pages/TaskForm";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<TaskDashboard />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route path="/create" element={<TaskForm />} />
      <Route path="/edit/:id" element={<TaskForm />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default App;
