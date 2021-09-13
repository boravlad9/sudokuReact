import React, {useState} from "react";
import './App.css';
import {PrivateRoute, ProvideAuth} from './Routing/PrivateRoute';
import RegisterFunction from './Auth/RegisterFunction';
import Sudoku from './screens/Sudoku';
import LoginFunction from './Auth/LoginFunction';
import Home from './components/Home';
import Header from './components/Header';
import Contacte from './components/Contacte';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [contact, setContact] = useState(null);
  const [selectedValue, setValue] = useState(null);
  const valueWasSelected = (value) => {
      setValue(value);
  };
  const valueContact = (value) => {
     setContact(value);
  }
  return (
    <ProvideAuth>
      <Header />
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
              <RegisterFunction />
            </Route>
            <Route path="/contacte">
              <Contacte/>
            </Route>
            <Route path="/sudoku">
              <Sudoku />
            </Route>
            <Route path="/login">
              <LoginFunction />
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
