import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // API
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Logowanie</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Podaj swój email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Hasło
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Podaj swoje hasło"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Zaloguj
          </button>
        </form>

        <div className="login-options">
          <p className="login-help-text">
            Nie masz konta?
              Zarejestruj się
          </p>
          <p className="login-help-text">
              Zapomniałeś hasła?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
