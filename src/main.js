// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Certifique-se que o nome aqui (App)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* // <--- Corrigido para App (como importado e definido em App.js) */}
  </React.StrictMode> {/* // <--- Vírgula removida */}
);
