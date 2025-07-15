import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTasks } from '../contexts/TaskContext'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addTask } = useTasks()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return alert('Title is required')

    addTask({ id: uuidv4(), title, description, completed: false })
    navigate('/')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label> <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '300px' }}
          />
        </div>
        <div>
          <label>Description:</label> <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{ width: '300px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
