import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ThemeConfig'
import PrincipalContainer from './Components/PrincipalContainer';
import 'fontsource-roboto';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <PrincipalContainer />
      </ThemeProvider>
  );
}

export default App;
