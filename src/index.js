import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const express = require('express')
// const app = express();
// var cors = require('cors')

// app.use(express.json());
// app.use(cors())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

