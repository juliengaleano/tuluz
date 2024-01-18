// components/Carrusel.js
import React, { useEffect } from 'react';
import styles from '../src/styles/carrusel.css';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components/Carrusel.js



const Carrusel = () => {
  const imagenes = [
    '/imagen1.png',
    '/imagen.jpg',
    '/tuluzlogo.png'
    // Agrega más rutas de imágenes según sea necesario
  ];

  const handleScroll = () => {
    const slide = document.querySelector(`.${styles.slide}`);
    

    // Verifica si el elemento existe antes de intentar acceder a su propiedad style
    if (slide) {
        const scrollPosition = window.scrollY;
        // Mueve el slide hacia arriba o abajo dependiendo del scroll
        slide.style.transform = `translateY(${scrollPosition / 10}px)`;
      }

  };

  // Agrega el evento de desplazamiento
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div className={styles.carrusel}>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index} className={styles.slide}>
            <img src={imagen} alt={`Imagen ${index + 1}`}height={'500px'} width={'100%'} className={styles.imagen} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
