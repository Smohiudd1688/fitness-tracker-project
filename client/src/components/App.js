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
  const [firstName, setFirstName] = useState("Sana");
  const [lastName, setLastName] = useState("Mohiuddin");
  const [username, setUsername] = useState("smohiudd");
  const [monthlyGoal, setMonthlyGoal] = useState(20);
  const [currentUser, setCurrentUser] = useState(null);

  const userInfo = {
    firstName: "Sana",
    lastName: "Mohiuddin",
    username: "smohiudd",
    monthlyGoal: 20
  }

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if (!currentUser) return <Login onLogin={setCurrentUser} setCurrentUser={setCurrentUser} />;

  function handleAccountChange(property, value) {
    if (property === "firstName") setFirstName(value);
    if (property === "lastName") setLastName(value);
    if (property === "monthlyGoal") setMonthlyGoal(value);
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
              fname={firstName} 
              lname={lastName} 
              username={username} 
              monthlyGoal={monthlyGoal} 
              onChangeAccount={handleAccountChange}
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
