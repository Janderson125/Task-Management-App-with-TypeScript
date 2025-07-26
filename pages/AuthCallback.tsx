import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const AuthCallback: React.FC = () => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Authentication Error: {error.message}</div>;
  }

  return <Navigate to="/" />;
};

export default AuthCallback;
