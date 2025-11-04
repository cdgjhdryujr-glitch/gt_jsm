import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' import path for React 18+
import './index.css';
import App from './App'; // Assuming your App component is in './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
