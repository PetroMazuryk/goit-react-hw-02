import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { GlobalStyle } from './GlobalStyle';
import { App } from './App';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
