import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ThemeConfig'
import PrincipalContainer from './Components/PrincipalContainer';
import RegistrarMateria from './Components/RegistrarMateria';
import 'fontsource-roboto';


function App() {
  return (
      <ThemeProvider theme={theme}>
        <PrincipalContainer />
      </ThemeProvider>
  );
}

export default App;

