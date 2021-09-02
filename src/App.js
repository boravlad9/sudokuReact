import React from "react";
import './App.css';
import {PrivateRoute, ProvideAuth} from './Routing/PrivateRoute';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Sudoku from './screens/Sudoku'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
            <Redirect
              to={{
                pathname: "/home"
              }}
            />
            </Route>
            <Route path="/public">
            </Route>
            <Route path="/sudoku">
              <Sudoku />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/home" />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
