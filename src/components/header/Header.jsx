import React from "react";
import style from "./Header.module.css";
import LogoutIcon from "@mui/icons-material/Logout"; 
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn, username, onLoginClick, onLogoutClick }) {
  const navigate = useNavigate()

  const _onLoginClick = ()=>{
    navigate("/login")
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>MovieApp</div>

      <div className={style.loginSection} onClick={()=>navigate("/list")}>Filmes1</div>
      <div className={style.loginSection} onClick={()=>navigate("/list2")}>Filmes2</div>
      <div className={style.loginSection}>
        {isLoggedIn ? (
          <span className={style.username}>
            Bem-vindo, {username}
            <LogoutIcon className={style.logoutIcon} onClick={onLogoutClick} />
          </span>
        ) : (
          <span className={style.loginLink} onClick={_onLoginClick}>
            Login
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
