import React, {useState} from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";
import Button from 'react-bootstrap/Button';

function Workouts() {
    const [showAll, setShowAll] = useState(false);

    const workouts = [
        {
            id: 1,
            name: "Leg Workout",
            time: 60,
            date: "January 4, 2023",
            exercises: [
                {
                    name: "Leg Press",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Squats",
                    sets: 4,
                    reps: 8
                }
            ],
            user: "smohiudd"
        },
        {
            id: 2,
            name: "Leg Workout",
            time: 60,
            date: "January 4, 2023",
            exercises: [
                {
                    name: "Leg Press",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Squats",
                    sets: 4,
                    reps: 8
                }
            ],
            user: "smohiudd"
        }
    ];

    function handleClick() {
        setShowAll(!showAll)
    }

    const renderWorkouts = workouts.map(workout => {
        return <WorkoutItem 
                        key={workout.id}
                        name={workout.name}
                        time={workout.time}
                        date={workout.date}
                        exercises={workout.exercises}
                        user={workout.user}
        />
    });

    return (
        <div>
            <h1 className="pageH">Workout Tracker</h1><br></br>
            <div className="buttDiv"><Button className="butt" onClick={handleClick}>{showAll ? "My Workouts" : "All Workouts"}</Button></div>
            {renderWorkouts}
            <WorkoutForm />
        </div>
    );
}

export default Workouts;