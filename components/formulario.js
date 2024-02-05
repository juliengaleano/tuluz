// formulario.js

import React, { useState } from 'react';
import { database } from '../lib/firebase'; // Importa la configuración de Firebase
import { ref, push } from 'firebase/database';
import {getFirestore, collection, } from 'firebase/firestore';
import styles from '../src/styles/estiloforms.css';


function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto de datos
    const nuevoDato = {
      nombre,
      correo,
      telefono,
      direccion,
      mensaje,
    };

    // Enviar los datos a Firebase
    const datosFormularioRef = ref(database, 'datosFormulario');
    push(datosFormularioRef, nuevoDato);
    // Limpiar los campos del formulario
    setNombre('');
    setCorreo('');
    setTelefono('');
    setDireccion('');
    setMensaje('');
    alert('MUY BIEN, TU MENSAJE HA SIDO ENVIADO, NOS PONDREMOS EN CONTACTO PRONTO  MUCHAS GRACIAS, y que buena energia   ');
  };
 
  return (
    
      <div className='formcontainer'>
      <form onSubmit={handleSubmit}>
      <h1 className='tituloform'>Cuentanos que dudas tienes, en breve nos contactaremos contigo</h1>
        <div className='formgroup'>
          <label htmlFor="nombre">Cual es tu Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className='formgroup'>
        <label htmlFor="correo"> dejanos tu Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className='formgroup'>
          <label htmlFor="Telefono">dejanos tu telefono :</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div className='formgroup'>
          <label htmlFor="direccion">desde que lugar nos escribes </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        
        <div className='formgroup'>
          <label htmlFor="mensaje">y cuentanos en que te podemos ayudar :</label>
          <textarea className='copiinput'
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>
    
  );
};
  

export default Formulario ;
