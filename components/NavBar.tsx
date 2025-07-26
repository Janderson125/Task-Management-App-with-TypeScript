import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <Link to="/">Task Dashboard</Link>
      {isAuthenticated ? (
        <>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Sign Out
          </button>
          <Link to="/tasks/new" className="add-task-btn">
            + Create New Task
          </Link>
        </>
      ) : (
        <button
          onClick={async () => {
            try {
              await loginWithRedirect();
              console.log("Login redirect triggered");
            } catch (error) {
              console.error("Login failed:", error);
            }
          }}
        >
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
