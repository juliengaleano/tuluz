// components/ListaProductos.js

import React from 'react';
import styles from '../src/styles/listaProductos.css';

const productos = [
  { id: 1, nombre: 'Producto 1', imagen: '/ruta/a/imagen1.jpg', precio: 20.99 },
  { id: 2, nombre: 'Producto 2', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 3, nombre: 'Producto 3', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 4, nombre: 'Producto 4', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 5, nombre: 'Producto 5', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 6, nombre: 'Producto 6', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 7, nombre: 'Producto 7', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 8, nombre: 'Producto 8', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 9, nombre: 'Producto 9', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
  { id: 10, nombre: 'Producto 10', imagen: '/ruta/a/imagen2.jpg', precio: 15.49 },
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
