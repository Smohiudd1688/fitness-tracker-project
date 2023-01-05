import React from "react";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";

function Workouts() {
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
            ]
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
            ]
        }
    ];

    const renderWorkouts = workouts.map(workout => {
        return <WorkoutItem 
                        key={workout.id}
                        name={workout.name}
                        time={workout.time}
                        date={workout.date}
                        exercises={workout.exercises}
        />
    });

    return (
        <div>
            <h1 id="workoutHead">Workout Tracker</h1>
            {renderWorkouts}
            <WorkoutForm />
        </div>
    );
}

export default Workouts;