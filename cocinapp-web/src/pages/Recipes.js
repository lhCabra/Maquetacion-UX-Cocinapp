import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ListItem from '../components/ListItem';

function Recipes() {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    if(path==='/importar'){

      alert('Esta funcionalidad aún no está disponible.'); 
    }else{
    navigate(path);}
  };

  return (
    <div className='create-recipe-content'>
      <Navbar title="Mis recetas" />
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="d-flex justify-content-between mt-5">
            <button
              className="button btn-primary flex-fill me-4"
              onClick={() => handleMenuClick('/crear-receta')}
            >
              Crear
            </button>
            <button className="button btn-basic flex-fill"
            onClick={() => handleMenuClick('/importar')} >
              Importar
            </button>
          </div>
          <div className="mt-5">
          <ListItem title='Salchipapas' description="1 hora"></ListItem></div>
          <div className="mt-5">

          <ListItem title='Bandeja paisa' description="2.8 horas"></ListItem></div>
          <div className="mt-5">

          <ListItem title='Huevo tibio' description="5 min"></ListItem></div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
