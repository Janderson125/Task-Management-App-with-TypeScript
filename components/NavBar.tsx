import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Task Dashboard
      </Link>

      {isLoading ? (
        <span>Loading...</span>
      ) : isAuthenticated ? (
        <>
          <span className="user-greeting">Welcome, {user?.name || user?.email}</span>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="nav-button"
          >
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="nav-button">
          Login
        </button>
      )}
    </nav>
  );
};

export default NavBar;
