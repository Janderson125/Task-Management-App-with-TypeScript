import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Task Dashboard
      </Link>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <span className="navbar-user">Hello, {user?.name}</span>
            <button
              className="navbar-button"
              onClick={() => logout()}
            >
              Log Out
            </button>
          </>
        ) : (
          <button className="navbar-button" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
