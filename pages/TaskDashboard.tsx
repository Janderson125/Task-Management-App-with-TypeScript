import React from "react";

interface DashboardProps {
  tasks: string[];
}

const Dashboard: React.FC<DashboardProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Task Dashboard</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Start by creating one!</p>
      ) : (
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
