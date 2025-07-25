// typescript-2/pages/TaskDashboard.tsx

import React from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import "../styles/TaskDashboard.css";

const TaskDashboard: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-dashboard-container">
      <h1>Task Dashboard</h1>
      <Link to="/create" className="btn-create-task">
        + Create New Task
      </Link>

      {tasks.length === 0 ? (
        <p>No tasks yet. Start by creating one!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <Link to={`/task/${task.id}`}>
                <h3>{task.title}</h3>
                <p>
                  Due:{" "}
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskDashboard;
