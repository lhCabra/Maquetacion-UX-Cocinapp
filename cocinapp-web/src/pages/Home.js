import logo from "../logo.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/iniciar-sesion");
  };

  const handleSignUpClick = () => {
    navigate("/registrarme");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="h1-cocinaap">COCINAPP</h1>
        <p className="eslogan-home">Tiempo perfecto, sabor insuperable</p>
        <div className="button-container">
          <button className="button" onClick={handleLoginClick}>
            Iniciar sesión
          </button>
          <button
            className="button"
            style={{ marginTop: "30px" }}
            onClick={handleSignUpClick}
          >
            Registrarme
          </button>
        </div>
      </header>
    </div>
  );
}
export default Home;
