import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pallete from "./appColours/ColourPalete";
import style from "./appColours/themes.module.css";
import "./styles.css";

import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import FilmList from "./pages/FilmList";
import FilmList2 from "./pages/FilmList2";
import FilmDetails from "./pages/FilmDetails";


export default function App() {
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
    <Router>
      <div className={style.Dark} style={AppStyle}>
        <Header         
          isLoggedIn={isLoggedIn}
          username={username}
          onLoginClick={() => setShowLogin(true)}
          onLogoutClick={handleLogout}/>
        <Routes>
          <Route path="/" exact element={<FilmList/>}/>
          <Route path="/list" exact element={<FilmList />} />
          <Route path="/list2" exact element={<FilmList2 />} />

          <Route path="/login" exact element={<Login/>}/>
          <Route path="/movie/:id" exact element={<FilmDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
const AppStyle = {
  backgroundColor: Pallete.primary,
  color: Pallete.text,
  minHeight: "100vh",
};


