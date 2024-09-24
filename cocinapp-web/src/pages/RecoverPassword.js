import logo from "../logo.png";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecoverPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate("/");
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    navigate("/contraseña-temporal");
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="formulario" onSubmit={handleSignupClick}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="error-label"
            style={{ marginTop: "0px", marginBottom: "33px" }}
          >
            A tu correo llegará una contraseña temporal
          </label>
          <button className="button" type="submit">
            Recuperar contraseña
          </button>
          <button className="button-cancel" onClick={handleCancelClick}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
export default RecoverPassword;
