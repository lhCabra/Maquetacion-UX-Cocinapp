import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>COCINAPP</h1>
        <p>
        Tiempo perfecto, sabor insuperable
        </p>
        <div className="button-container">
          <button className="button">Iniciar sesión</button>
          <button className="button">Registrarme</button>
        </div>
      </header>
    </div>
  );
}

export default App;
