import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("client"); // Domyślnie wybieramy klienta
  const [companyName, setCompanyName] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Hasła się nie zgadzają!");
      return;
    }
    // API call to register user (for example)
    console.log("Rejestracja", { email, password, accountType, companyName, portfolio, address });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Rejestracja</h2>
        <form className="register-form" onSubmit={handleSubmit}>
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

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Potwierdź Hasło
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Potwierdź swoje hasło"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountType" className="form-label">
              Wybierz typ konta
            </label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="form-input"
            >
              <option value="client">Klient</option>
              <option value="designer">Projektant</option>
            </select>
          </div>

          {accountType === "designer" && (
            <>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Nazwa firmy
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="form-input"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Podaj nazwę swojej firmy"
                />
              </div>

              <div className="form-group">
                <label htmlFor="portfolio" className="form-label">
                  Portfolio
                </label>
                <input
                  type="url"
                  id="portfolio"
                  className="form-input"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="Link do Twojego portfolio"
                />
              </div>
            </>
          )}

          {accountType === "client" && (
            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Adres dostawy
              </label>
              <input
                type="text"
                id="address"
                className="form-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Podaj swój adres dostawy"
              />
            </div>
          )}

          <button type="submit" className="register-button">
            Zarejestruj się
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
