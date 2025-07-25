// src/pages/LoginPage.tsx
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
    else loginWithRedirect();
  }, [isAuthenticated, loginWithRedirect, navigate]);

  return <div>Redirecting to login...</div>;
};

export default LoginPage;
