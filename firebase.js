
// firebase.js


import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyB64yJi8bZ2QCI8J68uhAT_zYYZlwYbKH8",
  authDomain: "tuluz-83ea6.firebaseapp.com",
  projectId: "tuluz-83ea6",
  storageBucket: "tuluz-83ea6.appspot.com",
  messagingSenderId: "445848622466",
  appId: "1:445848622466:web:059cb7d1a151859a676b9b",
  measurementId: "G-C7FBBCX4DE"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };