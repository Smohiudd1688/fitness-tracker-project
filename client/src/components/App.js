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
  const [workouts, setWorkouts] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // auto-login
    setIsLogged(true);
    fetch("/me").then((r) => {
      if (r.ok) {
         r.json().then((currentUser) => {
            setCurrentUser(currentUser)
            setGoals(currentUser.goals)
            setWorkouts(currentUser.workouts)
            setCompletedWorkouts(currentUser.completed_workouts)
          });
         } else {
          setIsLogged(false);
         }
      });

  }, []);

  if (!currentUser && isLogged) {
    return <Loading />
  } else if (!currentUser && !isLogged) {
    return <Login setGoals={setGoals} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />
  }

  function handleAccountChange(property, value) {
    if (property === "firstName") setCurrentUser({...currentUser, first_name: value});
    if (property === "lastName") setCurrentUser({...currentUser, last_name: value});
    if (property === "monthlyGoal") setCurrentUser({...currentUser, monthly_goal: value});
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" >
            <Login setGoals={setGoals} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/workouts" >
            <Workouts 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} 
              workouts={workouts} 
              setWorkouts={setWorkouts}
              completedWorkouts={completedWorkouts}
              setCompletedWorkouts={setCompletedWorkouts}
            />
          </Route>
          <Route path="/account" >
            <Account 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setIsLogged={setIsLogged}
              setGoals={setGoals}
              onChangeAccount={handleAccountChange}
            />
          </Route>
          <Route exact path="/" >
            <Home
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
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
