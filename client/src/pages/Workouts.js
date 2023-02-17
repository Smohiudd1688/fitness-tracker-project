import React, {useState, useEffect} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import MyWorkoutItem from "../components/MyWorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts({currentUser, setCurrentUser}) {
    const [showAll, setShowAll] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [allWorkouts, setAllWorkouts] = useState([]);

    useEffect(() => {
        fetch(`/workouts`)
        .then(res => res.json())
        .then(data => setWorkouts(data))

        fetch(`/user_workouts`)
        .then(res => res.json())
        .then(data => {
            setAllWorkouts(data)
        })
    }, []);

    function handleClick() {
        setShowAll(!showAll)
    }

    function handleWorkoutSubmit(date) {
        if (parseInt(date.substr(5,2)) === currentUser.month && parseInt(date.substr(0,4)) === currentUser.year) {
            fetch(`users/${currentUser.id}`, {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    current: currentUser.current + 1
                })
            })
            .then(res => res.json())
            .then(data => {setCurrentUser(data)})
        }
    }

    const renderMyWorkouts = workouts.map((workoutItem, index) => {
        return <MyWorkoutItem 
            key={index}
            id={workoutItem.id}
            name={workoutItem.title}
            exercises={workoutItem.exercises}
            onWorkoutSubmit={handleWorkoutSubmit}
        />
    });

    const renderAllWorkouts = allWorkouts.map((workoutItem, index) => {
        const workoutId = workoutItem.workout_id
        const name = workoutItem.workout.title;
        const time = workoutItem.time;
        const date = workoutItem.date;
        const exercises = workoutItem.workout.exercises;
        
        return <WorkoutItem 
                key={index}
                id={workoutId}
                name={name}
                time={time}
                date={date} 
                exercises={exercises}
                onWorkoutSubmit={handleWorkoutSubmit}
            />
    });


    return (
        <div>
            <h1 className="pageH">Workout Tracker</h1><br></br>
            <div className="buttDiv"><Button className="butt" onClick={handleClick}>{showAll ? "My Workouts" : "All Workouts"}</Button></div>
            {showAll ? renderAllWorkouts : renderMyWorkouts}
            {showAll ? null : <WorkoutForm 
                currentUser={currentUser} 
                workouts={workouts} 
                setWorkouts={setWorkouts}
                allWorkouts={allWorkouts}
                setAllWorkouts={setAllWorkouts}
                onWorkoutSubmit={handleWorkoutSubmit}
            />}
        </div>
    );
}

export default Workouts;