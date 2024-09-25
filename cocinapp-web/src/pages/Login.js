import logo from "../logo.png";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate("/");
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    if (email === "prueba@gmail.com" && password === "prueba") {
      navigate("/estadisticas");
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="formulario"  onSubmit={handleLoginClick}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <label className="error-label">Credenciales incorrectas</label>
          )}
          <button className="button" type="submit">
          Iniciar sesion
          </button>
          <a href="/recuperar-contraseña" className="link-label">
            Olvidaste la contraseña
          </a>{" "}
          <button
            className="button-cancel"
            style={{ marginTop: "0px" }}
            onClick={handleCancelClick}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
