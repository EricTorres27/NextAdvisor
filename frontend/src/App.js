import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ThemeConfig'
import PrincipalContainer from './Components/PrincipalContainer';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'fontsource-roboto';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/Login" />
              )
            }} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Homepage" component={PrincipalContainer} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
