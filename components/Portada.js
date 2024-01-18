// components/Portada.js

import { useEffect } from 'react';
import styles from '../src/styles/portada.css'; // Crea un archivo de estilos para la portada
import Carrusel from './Carrusel';

const Portada = () => {
  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      const portada = document.getElementById('portada');
      const scrollPosition = window.scrollY;

      // Agrega una clase de animación cuando se hace scroll
      if (portada && scrollPosition > portada.offsetTop - window.innerHeight / 2) {
        portada.classList.add(styles.animated);
      }
    };

    // Agrega el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="portada" className={styles.portada}>
      
      <Carrusel></Carrusel>
    </div>
  );
};

export default Portada;
