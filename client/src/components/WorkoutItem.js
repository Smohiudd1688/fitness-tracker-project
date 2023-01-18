import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import AddWorkoutListForm from "../Forms/AddWorkoutListForm";
import AddReviewForm from "../Forms/AddReviewForm";
import ReviewItem from "./ReviewItem";
import Button from 'react-bootstrap/Button';
import ExerciseItem from "./ExerciseItem";

function WorkoutItem({id, name, time, date, exercises, user, currentUser, workouts, setWorkouts, onWorkoutSubmit}) {
    const [showReviews, setShowReviews] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`/workouts/${id}/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    function handleShowClick() {
        setShowReviews(!showReviews);
    }

    const renderExercises = exercises.map((exercise, index) => {
        return (
            <ExerciseItem key={index} exercise={exercise} />
        )
    });

    const renderReviews = reviews.map(review => {
        return(
            <ReviewItem 
                key={review.id}
                difficulty={review.difficulty}
                wouldRepeat={review.wouldRepeat}
                description={review.description}
                user={review.username}
            />
        )
    });

    return (
        <Card border="primary" id="workoutCard">
            <Card.Header><strong>{name.toUpperCase()}</strong></Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    Duration of Workout: <em>{time} Minutes</em>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    Date of Workout: <em>{date}</em><br></br>
                </p>
                <hr></hr>
                <div className="list">
                    Exercises completed:<br></br><br></br>
                    {renderExercises}
                </div>
                <div className="list">
                    Reviews:<br></br><br></br>
                    <Button className="review" onClick={handleShowClick} variant="outline-primary">{showReviews ? "Hide Reviews" : "Show Reviews"}</Button> 
                    <AddReviewForm currentUser={currentUser} workout_id={id} reviews={reviews} setReviews={setReviews} /><br></br><br></br>
                    {showReviews ? renderReviews : null}
                </div>
                <AddWorkoutListForm 
                    name={name}
                    time={time}
                    exercises={exercises}
                    user={user}
                    currentUser={currentUser} 
                    workouts={workouts} 
                    setWorkouts={setWorkouts} 
                    onWorkoutSubmit={onWorkoutSubmit}
                /><br></br><br></br>
                <footer className="blockquote-footer">
                    Created by: {user}
                </footer>
            </blockquote>
            </Card.Body>
      </Card>
    );
}

export default WorkoutItem;