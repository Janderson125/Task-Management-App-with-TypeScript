import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <span>{user?.name}</span>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
