// pages/index.js

import React from 'react';
import Nav from '../components/nav';
import Portada from '../components/Portada';
import Informacion from '../components/Informacion';

function Inicio() {
  return (
    <div>
      <Nav></Nav>
      <Portada></Portada>
      
      <div  >
      <Informacion></Informacion>
      </div>
      {/* Agrega contenido adicional aquí */}
    </div>
  );
}

export default Inicio;
