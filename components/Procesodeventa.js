// components/ProcesosVenta.js

import React from 'react';
import styles from '../src/styles/procesodeventas.css';

const procesosVenta = [
  {
    id: 1,
    imagen: './imagenmujerpanel.jpeg',
    descripcion: 'Compra de Contado ',
    servicio:'Es un placer tenerte de visita, y nos da gusto saber de que quieres ser parte del cambio a energias limpias y renovables, te damos el 10% de descuento en tu compra y te damos 3 meses de soporte tecnico gratuito, tu no tienes que hacer nada, nosotros nos encargaremos de la instalacion y brindarte la mejor asesoria '
  },
  {
    id: 2,
    imagen: '/ruta/a/imagen_proceso2.jpg',
    descripcion: 'Descripción del Proceso 2...',
  },
  // Agrega más procesos según sea necesario
];

const ProcesosVenta = () => {
  return (
    <div className='contenedortotal'>
    <div className='contenedorProcesos'>
      {procesosVenta.map((proceso) => (
        <div key={proceso.id} className='proceso'>
          
          <h1>{proceso.descripcion}</h1>
          <img src={proceso.imagen} alt={`Proceso ${proceso.id}`} className='imagenProceso' />
          <div className='contenedortotal'>
          <p className='textstyle'>{proceso.servicio}</p>
          </div>
          
          {/* Espacio para el simulador, puedes agregarlo aquí más adelante */}
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProcesosVenta;
