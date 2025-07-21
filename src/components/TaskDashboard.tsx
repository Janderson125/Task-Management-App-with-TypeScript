import React from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../contexts/TaskContext'

// Temporary user stub for demo
const user = { name: "Guest" }

const TaskDashboard = () => {
  const { tasks, deleteTask, updateTask } = useTasks()

  const toggleComplete = (id: string) => {
    const task = tasks.find((t) => t.id === id)
    if (task) {
      updateTask({ ...task, completed: !task.completed })
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{user.name}'s Task Dashboard</h1>
      {/* Removed logout button since no auth */}
      <Link to="/tasks/new" style={{ marginLeft: 20 }}>
        Create New Task
      </Link>

      <ul>
        {tasks.map(({ id, title, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleComplete(id)}
              style={{ marginRight: 10 }}
            />
            <Link to={`/tasks/${id}`} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
              {title}
            </Link>
            <button onClick={() => deleteTask(id)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskDashboard;
