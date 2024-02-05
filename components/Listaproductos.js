// components/ListaProductos.js

import React from 'react';
import styles from '../src/styles/listaProductos.css';

const productos = [
  { id: 1, nombre: 'Panel monocristalino 550 watts 24 v', imagen: './panelsolar550w24vmono.jpg', precio: ' $1.077.785' },
  { id: 2, nombre: 'Panel monocristalino 450 watts 24 v', imagen: './panelsolarmono455w.jpg', precio: ' $1.050.000' },
  { id: 3, nombre: 'Panel monocristalino 340 watts 24 v', imagen: './panelsolar24v350wmon.jpg', precio:  ' $924.000' },
  { id: 4, nombre: 'Panel monocristalino 210 watts 12 v', imagen: './panelsolar210w12vmono.jpg', precio: ' $567.000' },
  { id: 5, nombre: 'Conector en paralelo para 3 paneles', imagen: './conectorparalelo.jpg', precio: '$108.000' },
  { id: 6, nombre: 'Conector terminal retie mc4', imagen: './conectorRETIEMC4.jpg', precio: ' $15.000' },
  { id: 7, nombre: 'Controlador de 60 a, pwm 48 v', imagen: './controlador60apwm48v.jpg', precio: ' $402.000'},
  { id: 8, nombre: 'Controlador de 40 a, pwm 24 v', imagen: './controlador40apwm12-24v.jpg', precio: ' $225.000' },
  { id: 9, nombre: 'bateria 12 v 100 ah', imagen: './bateria12v100ah.jpg', precio: ' $696.000' },
  { id: 10, nombre: 'inversor onda pura 600w 12v.jpg', imagen: './inversorondapura600w12v.jpg', precio: ' $660.000' },
  // Agrega más productos según sea necesario
];

const ListaProductos = () => {
  return (
    <div className='listaProductos'>
      {productos.map((producto) => (
        <div key={producto.id} className='tarjetaProducto'>
          <img src={producto.imagen} alt={producto.nombre} className='imagenProducto' />
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
