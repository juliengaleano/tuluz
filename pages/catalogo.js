// pages/catalogo.js

import React from 'react';
import Nav from '../components/nav';
import Simulador from '../components/Simulador';
import CrudComponent from '../components/crudcomponente';
import Formulario from '../components/formulario';

import styles from '../src/styles/simulador.css';
import TituloAnimado from '../components/Tituloanimado';
import ListaProductos from '../components/Listaproductos';


function Catalogo() {
  const textosTitulo = ['TULUZ',
   'TU ENERGÍA SOLAR', 
   'COMIENZA AHORAR', 
   'ENERGIAS RENOVABLES',
   'SALVEMOS EL PLANETA']; // Agrega los textos que desees

 
  return (
    <div>
      <Nav></Nav>
      <TituloAnimado textos={textosTitulo} />
      {/* Agrega la lista de productos o servicios aquí */}

      <div className={styles.conten}>
      <Simulador></Simulador>
      <ListaProductos></ListaProductos>
      
      </div>
      <Formulario></Formulario>
    </div>
    
  );
}

export default Catalogo;
