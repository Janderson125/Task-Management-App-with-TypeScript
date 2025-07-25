// typescript-2/pages/TaskForm.tsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types";
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid";
import "../styles/TaskForm.css";

const TaskForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, addTask, updateTask } = useTasks();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const existingTask = tasks.find((task) => task.id === id);

  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(existingTask?.description || "");
  const [dueDate, setDueDate] = useState(existingTask?.dueDate || "");
  const [completed, setCompleted] = useState(existingTask?.completed || false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const now = new Date().toISOString();

    const task: Task = {
      id: existingTask ? existingTask.id : uuidv4(),
      title: title.trim(),
      description: description.trim() || undefined,
      dueDate: dueDate || undefined,
      completed,
      createdAt: existingTask ? existingTask.createdAt : now,
      updatedAt: now,
    };

    if (existingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    navigate("/");
  };

  return (
    <div className="task-form-container">
      <h1>{existingTask ? "Edit Task" : "Create New Task"}</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate ? dueDate.split("T")[0] : ""}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="completed">
            <input
              id="completed"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
        </div>

        <button type="submit" className="btn-submit">
          {existingTask ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
