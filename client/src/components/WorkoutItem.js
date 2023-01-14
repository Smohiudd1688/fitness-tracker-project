import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import AddWorkoutListForm from "../Forms/AddWorkoutListForm";
import AddReviewForm from "../Forms/AddReviewForm";
import ReviewItem from "./ReviewItem";
import Button from 'react-bootstrap/Button';

function WorkoutItem({id, name, time, date, exercises, user, currentUser}) {
    const [showReviews, setShowReviews] = useState(false);
    const [reviews, setReviews] = useState([]);

    const renderExercises = exercises.map(exercise => {
        return (
            <p key={exercise.id}>{exercise}</p>
        )
    });

    function handleShowClick() {
        setShowReviews(!showReviews);
    }

    const renderReviews = reviews.map(review => {
        return(
            <ReviewItem 
                key={review.id}
                difficulty={review.difficulty}
                wouldRepeat={review.wouldRepeat}
                description={review.description}
                user={review.user}
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
                    Exercises completed:<br></br>
                    {renderExercises}
                </div>
                <p className="list">
                    Reviews:<br></br><br></br>
                    <Button className="review" onClick={handleShowClick} variant="outline-primary">{showReviews ? "Hide Reviews" : "Show Reviews"}</Button> 
                    <AddReviewForm currentUser={currentUser} workout_id={id} /><br></br><br></br>
                    {showReviews ? renderReviews : null}
                </p>
                <AddWorkoutListForm reviews={reviews} setReviews={setReviews} /><br></br><br></br>
                <footer className="blockquote-footer">
                    Created by: {user}
                </footer>
            </blockquote>
            </Card.Body>
      </Card>
    );
}

export default WorkoutItem;