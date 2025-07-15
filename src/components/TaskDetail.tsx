import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTasks } from '../contexts/TaskContext'

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { tasks, deleteTask } = useTasks()
  const navigate = useNavigate()

  const task = tasks.find((t) => t.id === id)

  if (!task) return <div>Task not found</div>

  const handleDelete = () => {
    deleteTask(task.id)
    navigate('/')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>

      <button onClick={handleDelete}>Delete Task</button>
      <Link to={`/tasks/${task.id}/edit`} style={{ marginLeft: 10 }}>
        Edit Task (not implemented)
      </Link>
      <br />
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default TaskDetail
