import React, {useState, useEffect} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts({currentUser, workouts, setWorkouts}) {
    const [showAll, setShowAll] = useState(false);
    const [allWorkouts, setAllWorkouts] = useState([]);

    useEffect(() => {
        fetch(`users/${currentUser.id}/workouts`)
        .then(res => res.json())
        .then(data => setAllWorkouts(data))
    }, []);

    function handleClick() {
        setShowAll(!showAll)
    }

    function renderWorkouts(workoutList) {
        return workoutList.map(workout => {
            return <WorkoutItem 
                            key={workout.id}
                            id={workout.id}
                            name={workout.title}
                            time={workout.time}
                            date={workout.date}
                            exercises={workout.exercises}
                            user={workout.username}
                            currentUser={currentUser}
            />
        });
    }

    return (
        <div>
            <h1 className="pageH">Workout Tracker</h1><br></br>
            <div className="buttDiv"><Button className="butt" onClick={handleClick}>{showAll ? "My Workouts" : "All Workouts"}</Button></div>
            {showAll ? renderWorkouts(allWorkouts) : renderWorkouts(workouts)}
            <WorkoutForm 
                currentUser={currentUser} 
                workouts={workouts} 
                setWorkouts={setWorkouts} 
                allWorkouts={allWorkouts} 
                setAllWorkouts={setAllWorkouts}
            />
        </div>
    );
}

export default Workouts;