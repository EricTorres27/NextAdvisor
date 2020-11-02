import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Components/Login';
//import Registro from './Components/Registro';

const LogIn = 1;

if (LogIn == 1){
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
} else
ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);
