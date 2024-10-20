import React, { useState } from "react";

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
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">Login</h2>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
