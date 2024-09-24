import logo from "../logo.png";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TemporalPassword() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate("/");
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    if (password2 !== password3) {
      setError(true);
      setErrorMessage("Contraseñas no coinciden");
    } else if (password !== "prueba") {
      setError(true);
      setErrorMessage("Contraseña temporal incorrecta");
    } else {
      navigate("/estadisticas");
    }
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
          <input
            type="password"
            placeholder="Contraseña temporal"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nueva contraseña"
            className="input"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="input"
            value={password3}
            onChange={(e) => setPassword3(e.target.value)}
          />
          {error && (
            <label
              className="error-label"
              style={{ marginTop: "0px", marginBottom: "34px" }}
            >
              {errorMessage}
            </label>
          )}
          <button className="button" type="submit">
            Cambiar contraseña
          </button>
          <button className="button-cancel" onClick={handleCancelClick}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
export default TemporalPassword;
