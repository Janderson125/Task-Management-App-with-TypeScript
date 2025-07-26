// typescript-2/pages/LoginPage.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <h2>Please Sign In</h2>
      <button onClick={() => loginWithRedirect()}>Sign In</button>
    </div>
  );
};

export default LoginPage;
