import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// Comment out Auth0 for now if you don’t have it working yet
// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import TaskDashboard from './components/TaskDashboard'
import TaskDetail from './components/TaskDetail'
import TaskForm from './components/TaskForm'
import { TaskProvider } from './contexts/TaskContext'

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TaskDashboard />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App
