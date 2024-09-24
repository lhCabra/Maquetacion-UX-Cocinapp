import logo from "../logo.png";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate("/");
  };

  const handleSignupClick = (event) => {
    event.preventDefault();
    if (password !== password2) {
      setError(true);
      setErrorMessage("Contraseñas no coinciden");
    } else if (email === "prueba@gmail.com") {
      setError(true);
      setErrorMessage("Correo ya se encuentra registrado");
    } else {
      navigate("/estadisticas");
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="formulario" onSubmit={handleSignupClick}>
          <input placeholder="Nombre" className="input" />
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="input"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {error && (
            <label className="error-label" style={{ marginTop: "0px" }}>
              {errorMessage}
            </label>
          )}
          <button className="button" type="submit">
            Registrarme
          </button>
          <button className="button-cancel" onClick={handleCancelClick}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
