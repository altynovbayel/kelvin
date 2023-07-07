import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <YMaps query={{apikey: '24bdf04b-f3e4-42c6-ade0-3e212ff6cbc0'}}>
        <App /> 
      </YMaps>
    </BrowserRouter>
  </React.StrictMode>
);
