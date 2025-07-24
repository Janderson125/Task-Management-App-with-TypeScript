import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div><h1>Task Details for {id}</h1></div>;
};

export default TaskDetails;
