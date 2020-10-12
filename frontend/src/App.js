import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './ThemeConfig'
import PrincipalContainer from './Components/PrincipalContainer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrincipalContainer
        texto="Hola mundo"
      />
    </ThemeProvider>
  );
}

export default App;
