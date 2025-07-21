import React from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../contexts/TaskContext'
import './TaskDashboard.css'  // Import external CSS file

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
    <div className="task-dashboard-container">
      <h1>{user.name}'s Task Dashboard</h1>
      <Link to="/tasks/new" className="create-task-link">
        Create New Task
      </Link>

      <ul className="task-list">
        {tasks.map(({ id, title, completed }) => (
          <li key={id} className="task-item">
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
                aria-label={`Mark task ${title} as completed`}
                className="task-checkbox"
              />
              <Link
                to={`/tasks/${id}`}
                className={`task-link ${completed ? 'completed' : ''}`}
              >
                {title}
              </Link>
            </label>
            <button
              onClick={() => deleteTask(id)}
              className="delete-task-button"
              aria-label={`Delete task ${title}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskDashboard
