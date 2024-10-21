import React, { useState } from "react";
import style from "./Login.module.css"

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do email e senha
    const emailValid = email.includes("@");
    const passwordValid = password.length >= 3;

    if (emailValid && passwordValid) {
      onLogin(email); // Passa o email para a função onLogin
    } else {
      alert(
        "Por favor, insira um e-mail válido e uma senha com pelo menos 3 caracteres."
      );
    }
  };

  return (
    <div className={style.wrapper}>
      <form className={style.signin} onSubmit={handleSubmit}>
        <h2 className={style.signinHeading}>Login</h2>
        <input
          type="text"
          className={style.control}
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          className={style.control}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={style.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
