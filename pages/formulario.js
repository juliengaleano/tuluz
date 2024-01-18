// formulario.js

import React, { useState } from 'react';
import { database } from '../firebase'; // Importa la configuración de Firebase
import { ref, push } from 'firebase/database';
import {getFirestore, collection, } from 'firebase/firestore';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto de datos
    const nuevoDato = {
      nombre,
      correo,
      mensaje,
    };

    // Enviar los datos a Firebase
    const datosFormularioRef = ref(database, 'datosFormulario');
    push(datosFormularioRef, nuevoDato);
    // Limpiar los campos del formulario
    setNombre('');
    setCorreo('');
    setMensaje('');
    alert('mensaje  guardado');
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
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
}

export default Formulario;
