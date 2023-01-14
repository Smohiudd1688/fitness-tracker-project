import React, {useState} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts({currentUser, workouts, setWorkouts, allWorkouts}) {
    const [showAll, setShowAll] = useState(false);

    function handleClick() {
        setShowAll(!showAll)
    }

    function renderWorkouts(workoutList) {
        return workoutList.map(workout => {
            return <WorkoutItem 
                            key={workout.id}
                            name={workout.title}
                            time={workout.time}
                            date={workout.date}
                            exercises={workout.exercises}
                            user={currentUser.username}
            />
        });
    }

    const renderMyWorkouts = workouts.map(workout => {
        return <WorkoutItem 
                        key={workout.id}
                        name={workout.title}
                        time={workout.time}
                        date={workout.date}
                        exercises={workout.exercises}
                        user={currentUser.username}
        />
    });

    return (
        <div>
            <h1 className="pageH">Workout Tracker</h1><br></br>
            <div className="buttDiv"><Button className="butt" onClick={handleClick}>{showAll ? "My Workouts" : "All Workouts"}</Button></div>
            {showAll ? renderWorkouts(allWorkouts) : renderWorkouts(workouts)}
            <WorkoutForm id={currentUser.id} workouts={workouts} setWorkouts={setWorkouts}/>
        </div>
    );
}

export default Workouts;