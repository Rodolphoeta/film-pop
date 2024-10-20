import React, { useState } from "react";
import FetchData from "./components/FetchData";
import Movies from "./components/Movies";
import Login from "./components/Login";
import Header from "./components/Header";
import "./styles.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controle de login
  const [showLogin, setShowLogin] = useState(false); // Controle de exibição do login
  const [username, setUsername] = useState(""); // Armazena o nome do usuário

  const handleLogin = (email) => {
    const user = email.split("@")[0]; // Extrai o nome antes do "@"
    setUsername(user);
    setIsLoggedIn(true); // Atualiza o estado de login
    setShowLogin(false); // Fecha a aba de login
  };

  const handleLogout = () => {
    setUsername(""); // Reseta o nome do usuário
    setIsLoggedIn(false); // Desloga o usuário
    setShowLogin(false); // Oculta a tela de login
  };

  return (
    <div className="app-container">
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
      />

      {/* Verifica se o usuário está logado ou se deve mostrar o login */}
      {!isLoggedIn && showLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Movies />
          <FetchData />
        </>
      )}
    </div>
  );
}

export default App;
