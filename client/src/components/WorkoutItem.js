import React from "react";
import Card from 'react-bootstrap/Card';
import AddWorkoutListForm from "../Forms/AddWorkoutListForm";
import ExerciseItem from "./ExerciseItem";

function WorkoutItem({id, name, exercises, onWorkoutSubmit}) {
    const renderExercises = exercises.map((exercise, index) => {
        return (
            <ExerciseItem key={index} exercise={exercise} />
        )
    });

    return (
        <Card border="primary" id="workoutCard">
            <Card.Header><strong>{name.toUpperCase()}</strong></Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <div className="list">
                    Exercises completed:<br></br><br></br>
                    {renderExercises}
                </div>
                <AddWorkoutListForm id={id} onWorkoutSubmit={onWorkoutSubmit} /><br></br>
            </blockquote>
            </Card.Body>
      </Card>
    );
}

export default WorkoutItem;