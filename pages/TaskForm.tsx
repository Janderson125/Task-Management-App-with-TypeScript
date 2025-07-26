import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface TaskCreateProps {
  onAddTask: (task: string) => void;
}

const TaskCreate: React.FC<TaskCreateProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    onAddTask(taskText.trim());
    setTaskText("");
    navigate("/"); // Redirect back to dashboard after adding task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskCreate;
