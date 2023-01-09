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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [monthlyGoal, setMonthlyGoal] = useState(20);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;



  function handleAccountChange(property, value) {
    if (property === "firstName") setCurrentUser({...currentUser, first_name: value});
    if (property === "lastName") setCurrentUser({...currentUser, last_name: value});
    if (property === "monthlyGoal") setCurrentUser({...currentUser, monthly_goal: value});
  }

  function handleAccountUpdate() {
    
  }

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/workouts" >
            <Workouts />
          </Route>
          <Route path="/account" >
            <Account 
              currentUser={currentUser}
              onChangeAccount={handleAccountChange}
              setCurrentUser={setCurrentUser}
            />
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
