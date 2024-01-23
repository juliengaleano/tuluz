// components/CrudComponent.js

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, update, remove } from 'firebase/database';
import styled from 'styled-components';
import firebaseApp from '../lib/firebase';

const CrudContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  background-color:black;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 10px;
  }
`;

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    
    const db = getDatabase();
    const dataRef = ref(db, 'items');

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const items = snapshot.val() || [];
      setData(items);
    });

    return () => unsubscribe();
  }, []);

  const handleAddItem = () => {
    const db = getDatabase();
    const dataRef = ref(db, 'items');
    push(dataRef, newItem);
    setNewItem('');
  };

  const handleUpdateItem = (key, updatedItem) => {
    const db = getDatabase();
    const dataRef = ref(db, 'items');
    update(ref(dataRef, key), { value: updatedItem });
  };

  const handleDeleteItem = (key) => {
    const db = getDatabase();
    const dataRef = ref(db, 'items');
    remove(ref(dataRef, key));
  };

  return (
    <CrudContainer>
      <h2>CRUD Component</h2>
      <ItemList>
        {Array.isArray(data) && data.map((item) => (
          <ListItem key={item.key}>
            {item.value}
            
            <div>
              <button onClick={() => handleUpdateItem(item.key, 'Updated Item')}>
                Actualizar
              </button>
              <button onClick={() => handleDeleteItem(item.key)}>Eliminar</button>
            </div>
          </ListItem>
        ))}
      </ItemList>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Agregar Item</button>
      </div>
    </CrudContainer>
  );
};

export default CrudComponent;
