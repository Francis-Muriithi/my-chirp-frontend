import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// const cors = require('cors');
// app.use(cors({
//     origin: '*'
// }));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

