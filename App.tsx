import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/TaskDashboard";
import TaskCreate from "./pages/TaskForm";
import AuthCallback from "./pages/AuthCallback";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    console.log("Adding task:", task); // Debug log
    setTasks((prev) => [...prev, task]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route path="/tasks/new" element={<TaskCreate onAddTask={addTask} />} />
        <Route path="/callback" element={<AuthCallback />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
