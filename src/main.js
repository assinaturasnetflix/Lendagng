// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// Importe o CSS principal que importa o Tailwind (o Vite lida com isso)
import './input.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null, React.createElement(App)));
