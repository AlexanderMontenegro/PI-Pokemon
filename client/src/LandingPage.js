import React from 'react';
import './LandingPage.css'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <img src= "img/titulo.png" alt="Logo" className="titles" />
      <p className='subtitle'>¡Encuentra y atrapa a tus pokemones favoritos!</p>
      <button className="enter-button">Acceso</button>
    </div>
  );
}

export default LandingPage;
