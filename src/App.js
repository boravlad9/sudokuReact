import React from "react";
import './App.css';
import {PrivateRoute, ProvideAuth} from './Routing/PrivateRoute';
import Register from './Auth/Register';
import Sudoku from './screens/Sudoku';
import Login from './Auth/Login';
import Home from './components/Home';
import Contacte from './components/Contacte';

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
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/contacte">
              <Contacte />
            </Route>
            <Route path="/sudoku">
              <Sudoku />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/home" >
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
