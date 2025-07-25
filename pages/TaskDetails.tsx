import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/TaskDetails.css";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTasks();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div className="taskdetails-message">Please log in to see task details.</div>;
  }

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return <div className="taskdetails-message">Task not found.</div>;
  }

  return (
    <div className="taskdetails-container">
      <h2 className="taskdetails-title">{task.title}</h2>
      <p className="taskdetails-description">{task.description || "No description provided."}</p>
      <p className="taskdetails-dueDate">Due: {task.dueDate ?? "No due date"}</p>
      <p className="taskdetails-status">
        Status: {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TaskDetails;
