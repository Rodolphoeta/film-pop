import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

function Header({ isLoggedIn, username, onLoginClick, onLogoutClick }) {
  return (
    <header className="header">
      <div className="logo">MovieApp</div>
      <div className="login-section">
        {isLoggedIn ? (
          <span className="username">
            Bem-vindo, {username}
            <LogoutIcon className="logout-icon" onClick={onLogoutClick} />
          </span>
        ) : (
          <span className="login-link" onClick={onLoginClick}>
            Login
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
