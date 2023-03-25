import React, {useState, useEffect} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import MyWorkoutItem from "../components/MyWorkoutItem";
import WorkoutItem from "../components/WorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts({workouts, setWorkouts, currentUser, setCurrentUser}) {
    const [showAll, setShowAll] = useState(false);
    const [allWorkouts, setAllWorkouts] = useState([]);

    useEffect(() => {
        fetch(`/workouts`)
        .then(res => res.json())
        .then(data => {
            setAllWorkouts(data)
        })
    }, []);

    function handleClick() {
        setShowAll(!showAll)
    }

    function handleWorkoutSubmit(date, newWorkout) {
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

        setWorkouts([...workouts, newWorkout]);
    }


    const renderAllWorkouts = allWorkouts.map((workoutItem) => {

        return <WorkoutItem 
            key={workoutItem.id}
            id={workoutItem.id}
            name={workoutItem.title}
            exercises={workoutItem.exercises}
            onWorkoutSubmit={handleWorkoutSubmit}
        />
    });

    const renderMyWorkouts = workouts.map((workoutItem) => { 

        const workoutId = workoutItem.workout.id
        const name = workoutItem.workout.title;
        const time = workoutItem.time;
        const date = workoutItem.date;
        const exercises = workoutItem.workout.exercises;
        
        return <MyWorkoutItem 
                key={workoutItem.id}
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