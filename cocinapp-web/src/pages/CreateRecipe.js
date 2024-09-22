import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortTextInput from '../components/ShortTextInput';
import TextAreaInput from '../components/TextAreaInput';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('El campo de nombre está vacío.');
    } else {
      setErrorMessage('Ya existe una receta con ese nombre.');
    }
    setErrorVisible(true);
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className='create-recipe-content'>
      <Navbar title="Crear receta" />
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <div className="create-form">
            <ShortTextInput
              label="Nombre"
              placeholder="Asígnale un nombre a tu receta..."
              className="form"
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
            />
            {errorVisible && <p className="error-message">{errorMessage}</p>}
          </div>

          <div className="create-form">
            <TextAreaInput label="Descripción" placeholder="Escribe una descripción de la receta..." className="form" />
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button
              className="button btn-secondary flex-fill me-5"
              onClick={() => handleMenuClick('/mis-recetas')}
            >
              Cancelar
            </button>
            <button className="button btn-primary flex-fill" onClick={handleError}>
              Guardar receta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;
