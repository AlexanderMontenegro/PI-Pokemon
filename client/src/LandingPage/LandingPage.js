import React from 'react';
import { Link } from 'react-router-dom'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <img src="img/titulo.png" alt="Logo" className="titles" />
      <p className='subtitle'>¡Encuentra y atrapa a tus pokemones favoritos!</p>
      {/* Agrega el componente Link para redireccionar al HomePage */}
      <Link to="/home" className="enter-button">Acceso</Link>
    </div>
  );
}

export default LandingPage;
