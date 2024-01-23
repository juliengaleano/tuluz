// formulario.js

import React, { useState } from 'react';
import { database } from '../lib/firebase'; // Importa la configuración de Firebase
import { ref, push } from 'firebase/database';
import {getFirestore, collection, } from 'firebase/firestore';
import styled from 'styled-components';

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
  // Estilos para el formulario
const FormContainer = styled.div`
max-width: 400px;
margin: 0 auto;
`;

const Form = styled.form`
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
padding: 20px;

display: flex;
flex-direction: column;
`;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
const StyledForm  = () => {


  return (
    
      <FormContainer>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
        <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </FormGroup>
          
        
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
      </FormContainer>
    
  );
}
};
  

export default StyledForm ;
