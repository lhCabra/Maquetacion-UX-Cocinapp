import React, { useState } from 'react';
import '../App.css';
import arrow from '../arrow_down.png'
function Filter() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div  className="filter-content">
            <div className="filter" onClick={toggleMenu}>
          Mensual
          
        <img src={arrow}  alt="dropdown" id="dropdown-icon"/>
        </div> 
            <div className={`dropdown-menu ${menuOpen ? 'show' : 'hide'}`}>
              <div className="menu-item" id='first' onClick={toggleMenu}>Semanal</div>
                    <div className="menu-divider"></div>
                    <div className="menu-item" onClick={toggleMenu}>Mensual</div>
                    <div className="menu-divider"></div>
                    <div className="menu-item" id="last" onClick={toggleMenu}>Semestral</div>
                </div>
        </div>
    );
}
export default Filter;