import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import Workouts from '../pages/Workouts';
import Account from '../pages/Account';
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/workouts" >
            <Workouts />
          </Route>
          <Route path="/account" >
            <Account />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
