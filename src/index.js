import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <YMaps query={{apikey: '5367b11a-af40-47aa-bdb9-cd54ea1bb253'}}>
        <App /> 
      </YMaps>
    </BrowserRouter>
  </React.StrictMode>
);
