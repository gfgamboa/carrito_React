import React from 'react';
import ReactDOM from 'react-dom/client';   //Importar propiedad de manejo de rutas
import { BrowserRouter } from 'react-router-dom';   
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);