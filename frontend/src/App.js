import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ThemeConfig'
import PrincipalContainer from './Components/PrincipalContainer';
import Login from './Views/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'fontsource-roboto';
import Registro from './Components/Registro'

let login = localStorage.getItem("isLoggedIn");
function App() {
  return (
    <ThemeProvider theme={theme}>
      {login ? (
        <PrincipalContainer />
      ) : (
          < Router >
          <Route exact path=""
                            render={() => {
                                return (
                                    <Redirect to="/login" />
                                )
                            }} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Registro" component={Registro} />
          </Router>
  )
}
    </ThemeProvider >
  );
}

export default App;
