import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './NavBar.css'

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <div className="navbar-buttons">
        {isAuthenticated ? (
          <>
            <span className="user-name">Hello, {user?.name}</span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </nav>
  )
}

export default NavBar
