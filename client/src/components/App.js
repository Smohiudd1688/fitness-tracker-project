import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home';
import Workouts from '../pages/Workouts';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Loading from '../pages/Loading';
import '../App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
         r.json().then((currentUser) => {
            setCurrentUser(currentUser)
            setGoals([...currentUser.goals])
          });
        }
      })
      /*.then(() => {
        if (!currentUser && !isLogged) {
          return <Login setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />
        } else if (!currentUser && isLogged) {
          return <Loading />
        }
      })*/

  }, []);

  if (!currentUser) {
    return <Login setGoals={setGoals} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />
  }

    
  


  function handleAccountChange(property, value) {
    if (property === "firstName") setCurrentUser({...currentUser, first_name: value});
    if (property === "lastName") setCurrentUser({...currentUser, last_name: value});
    if (property === "monthlyGoal") setCurrentUser({...currentUser, monthly_goal: value});
  }

  function handleAccountUpdate() {
    
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" >
            <Workouts />
          </Route>
          <Route path="/workouts" >
            <Workouts currentUser={currentUser} />
          </Route>
          <Route path="/account" >
            <Account 
              currentUser={currentUser}
              onChangeAccount={handleAccountChange}
              setCurrentUser={setCurrentUser}
              setIsLogged={setIsLogged}
              setGoals={setGoals}
            />
          </Route>
          <Route exact path="/" >
            <Home
              currentUser={currentUser}
              goals={goals}
              setGoals={setGoals}
            />
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
