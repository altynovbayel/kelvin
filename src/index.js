import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <YMaps query={{apikey: 'cda201be-e5a3-4e68-9920-ecd73da3e6cf'}}>
        <App /> 
      </YMaps>
    </BrowserRouter>
  </React.StrictMode>
);
