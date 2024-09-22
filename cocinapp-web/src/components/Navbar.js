import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
function Navbar({ title }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleMenuClick = (path) => {
        if (path === '/perfil') {
            alert('Esta funcionalidad aún no está disponible.'); 
        } else {
        navigate(path); 
        setMenuOpen(false); 
        }
    };

    return (
        <div className="navbar">
            <h1 onClick={() =>handleMenuClick('/')} style={{ cursor: 'pointer' }}>COCINAPP</h1>
            <div className="subtitle">
                <h2>{title}</h2>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div> <div className={`dropdown-menu ${menuOpen ? 'show' : 'hide'}`}>
                   {title!=="Estadísticas" &&<div className="menu-item" id='first' onClick={() => handleMenuClick('/estadisticas')}>Estadísticas</div>}
                   {title==="Estadísticas" &&<div className="menu-item" id='first' onClick={() => handleMenuClick('/mis-recetas')}>Mis recetas</div>}
                    <div className="menu-divider"></div>
                    <div className="menu-item" onClick={() => handleMenuClick('/perfil')}>Mi perfil</div>
                    <div className="menu-divider"></div>
                    <div className="menu-item" id="last" onClick={() => handleMenuClick('/')}>Cerrar sesión</div>
                </div>
        </div>
    );
}
export default Navbar;