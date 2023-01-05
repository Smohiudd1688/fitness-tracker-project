import React from "react";
import Card from 'react-bootstrap/Card';

function WorkoutItem({name, time, date, exercises}) {
    const renderExercises = exercises.map((exercise) => {
        return (
            
            <>&emsp; {exercise.sets} X {exercise.reps} {exercise.name}<br></br></>
            
        )
    })

    return (
        <Card border="primary" id="workoutCard">
            <Card.Header><strong>{name.toUpperCase()}</strong></Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    Duration of Workout: <em>{time} Minutes</em>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    Date of Workout: <em>{date}</em><br></br>
                </p>
                <p id="list">
                    Exercises completed:<br></br>
                    {renderExercises}
                </p>
            </blockquote>
            </Card.Body>
      </Card>
    );
}

export default WorkoutItem;