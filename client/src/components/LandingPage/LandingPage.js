
import React from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landing-page">
      <img src="img/titulo 2.png" alt="Logo" className="titles" />
      <p className='subtitle'>¡Encuentra y Atrapa a tus Pokemones favoritos!</p>
      <Link to="/home" className="enter-button">Acceso</Link>
    </div>
  );
}

export default LandingPage;
