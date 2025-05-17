// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';  // Certifique-se que o componente exportado em App.js se chama "App"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
