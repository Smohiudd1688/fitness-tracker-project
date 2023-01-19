import React, {useState, useEffect} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts({currentUser, setCurrentUser, workouts, setWorkouts, completedWorkouts, setCompletedWorkouts,}) {
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

    const renderCompleted = completedWorkouts.map((workout, index) => {
        return <WorkoutItem 
                            key={index}
                            id={workout.id}
                            name={workout.title}
                            time={workout.time}
                            date={workout.created_at.substr(0,10)}
                            exercises={workout.exercises}
                            user={workout.username}
                            currentUser={currentUser}
                            workouts={workouts}
                            setWorkouts={setWorkouts}
                            completedWorkouts={completedWorkouts}
                            setCompletedWorkouts={setCompletedWorkouts}
                            onWorkoutSubmit={handleWorkoutSubmit}
            />
    })

    function renderWorkouts(workoutList) {
        return workoutList.map((workout, index) => {
            return <WorkoutItem 
                            key={index}
                            id={workout.id}
                            name={workout.title}
                            time={workout.time}
                            date={workout.date}
                            exercises={workout.exercises}
                            user={workout.username}
                            currentUser={currentUser}
                            workouts={workouts}
                            setWorkouts={setWorkouts}
                            completedWorkouts={completedWorkouts}
                            setCompletedWorkouts={setCompletedWorkouts}
                            onWorkoutSubmit={handleWorkoutSubmit}
            />
        });
    }

    return (
        <div>
            <h1 className="pageH">Workout Tracker</h1><br></br>
            <div className="buttDiv"><Button className="butt" onClick={handleClick}>{showAll ? "My Workouts" : "Find New Workout"}</Button></div>
            {showAll ? renderWorkouts(allWorkouts) : renderWorkouts(workouts)}
            {showAll ? null : renderCompleted}
            <WorkoutForm 
                currentUser={currentUser} 
                workouts={workouts} 
                setWorkouts={setWorkouts}
                onWorkoutSubmit={handleWorkoutSubmit}
            />
        </div>
    );
}

export default Workouts;