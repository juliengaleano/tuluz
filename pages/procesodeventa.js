// pages/procesodeventa.js

import React from 'react';
import ProcesosVenta from '../components/Procesodeventa';
import Nav from '../components/nav';

function ProcesoDeVenta() {
  return (
    <div>
      <Nav></Nav>
      <h1>Proceso de Venta de Energía Solar</h1>
      <ProcesosVenta></ProcesosVenta>
      {/* Describe el proceso de venta aquí */}
    </div>
  );
}

export default ProcesoDeVenta;
