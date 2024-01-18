// components/TituloAnimado.js

import React, { useState, useEffect } from 'react';
import styles from '../src/styles/tituloAnimado.css';

const TituloAnimado = ({ textos }) => {
  const [indiceTexto, setIndiceTexto] = useState(0);

  // Efecto para cambiar el índice de texto cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceTexto((prevIndice) => (prevIndice + 1) % textos.length);
    }, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [textos]);

  return (
    <h2 className='tituloAnimado'>
      {textos[indiceTexto]}
    </h2>
  );
};

export default TituloAnimado;
