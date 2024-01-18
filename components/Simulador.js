// components/Simulador.js

import React, { useState } from 'react';
import styles from '../src/styles/simulador.css';

const Simulador = () => {
  const [electrodomesticos, setElectrodomesticos] = useState({
    nevera: false,
    lavadora: false,
    aire: false,
    tv: false,
    computadora: false,
  });
  

  const consumos = {
    nevera: 150, // Consumo en vatios
    lavadora: 500,
    bombillos: 800,
    tv: 200,
    computadora: 300,
  };

  const handleCheckboxChange = (electrodomestico) => {
    setElectrodomesticos((prev) => ({
      ...prev,
      [electrodomestico]: !prev[electrodomestico],
    }));
  };

  const calcularConsumoTotal = () => {
    let consumoTotal = 0;

    for (const electrodomestico in electrodomesticos) {
      if (electrodomesticos[electrodomestico]) {
        consumoTotal += consumos[electrodomestico];
      }
    }

    return consumoTotal;
  };

  const calcularKilovatios = () => {
    const consumoTotal = calcularConsumoTotal();
    const kilovatios = consumoTotal / 1000; // Convertir vatios a kilovatios
    return kilovatios.toFixed(2);
  };

  return (
    <div className={styles.simulador}>
      
      <div className={styles.electrodomesticos}>
      <div className='simulador'>
      <h2 className='tituloanimado'>Simulador de Consumo Eléctrico</h2>
      <h3>¿Cuales de los siguientes electrodomesticos tienes  en casa ?</h3>
      <div className='electrodomesticos'>

<div className='conten'>
<label>
          <input
            type="checkbox"
            checked={electrodomesticos.nevera}
            onChange={() => handleCheckboxChange('nevera')}
          />
          Nevera
</label>
<label>
          <input
            type="checkbox"
            checked={electrodomesticos.lavadora}
            onChange={() => handleCheckboxChange('lavadora')}
          />
          lavadora
</label>
<label>
          <input
            type="checkbox"
            checked={electrodomesticos.bombillos}
            onChange={() => handleCheckboxChange('bombillos')}
          />
          bombillos
</label>
        
<label>
          <input
            type="checkbox"
            checked={electrodomesticos.tv}
            onChange={() => handleCheckboxChange('tv')}
          />
          tv
</label>
<label>
          <input
            type="checkbox"
            checked={electrodomesticos.computadora}
            onChange={() => handleCheckboxChange('computadora')}
          />
          computadora
</label>
       
       
       
       
        {/* Repite el bloque de código anterior para los otros electrodomésticos */}
     
      <div className='simulador'><br/>
      <div className='botones'>
        <button onClick={() => alert(`Consumo total: ${calcularConsumoTotal()} vatios`)}>
          Calcular Consumo Total
        </button>
        <button onClick={() => alert(`Kilovatios necesarios: ${calcularKilovatios()} kW`)}>
          Calcular Kilovatios
        </button>
      </div>
      </div>

</div>
        
      <div className={styles.resultado}>
        {/* ... (código del resultado) */}
      </div>
    </div>
    </div>
    </div>
    </div>
  );
  }

export default Simulador;
