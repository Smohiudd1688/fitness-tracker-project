import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import Workouts from '../pages/Workouts';
import Account from '../pages/Account';
import Login from '../pages/Login';
import '../App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //if (!user) return <Login onLogin={setUser} />;

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
