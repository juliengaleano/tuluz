// components/Nav.js

import Link from 'next/link';
import styles from '../src/styles/Nav.css'; // Importa los estilos CSS

const Nav = () => {
  return (
    <nav className='nav'>
      
      <ul className='lista'>
        <li className='itemLogo'><img src="./tuluzlogoanimado.gif" alt="Logo de la empresa" /></li>
        <li className='item'><a href="/">Inicio</a></li>
        <li className='item'><a href="/catalogo">Catálogo</a></li>
        <li className='item'><a href="/procesodeventa">Proceso de Venta</a></li>
        <li className='item'><a href="/serviciotecnico">Servicio Técnico</a></li>
        <li className='item'><a href="/asesoriaycotizacion">Asesoría y Cotización</a></li>
        
      </ul>
    </nav>
  );
};

export default Nav;