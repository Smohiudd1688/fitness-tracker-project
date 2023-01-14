import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import AddWorkoutListForm from "../Forms/AddWorkoutListForm";
import AddReviewForm from "../Forms/AddReviewForm";
import ReviewItem from "./ReviewItem";
import Button from 'react-bootstrap/Button';

function WorkoutItem({name, time, date, exercises, user}) {
    const [showReviews, setShowReviews] = useState(false);

    const reviews = [
        {
            difficulty: 2,
            wouldRepeat: 4,
            description: "I really enjoyed this workout. It was not too difficult for a beginner like me. I was sore the next day but not too much that I couldn't workout today!",
            user: "smohiudd"
        },
        {
            difficulty: 2,
            wouldRepeat: 4,
            description: "I really enjoyed this workout. It was not too difficult for a beginner like me. I was sore the next day but not too much that I couldn't workout today!",
            user: "smohiudd"
        },
        {
            difficulty: 2,
            wouldRepeat: 4,
            description: "I really enjoyed this workout. It was not too difficult for a beginner like me. I was sore the next day but not too much that I couldn't workout today!",
            user: "smohiudd"
        }
    ];


    const renderExercises = exercises.map(exercise => {
        return (
            <p key={exercise.id}>{exercise}</p>
        )
    });

    function handleShowClick() {
        setShowReviews(!showReviews);
    }

    const renderReviews = reviews.map((review, index) => {
        return(
            <ReviewItem 
                key={index}
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
                <p className="list">
                    Exercises completed:<br></br>
                    {renderExercises}
                </p>
                <p className="list">
                    Reviews:<br></br><br></br>
                    <Button className="review" onClick={handleShowClick} variant="outline-primary">{showReviews ? "Hide Reviews" : "Show Reviews"}</Button> 
                    <AddReviewForm /><br></br><br></br>
                    {showReviews ? renderReviews : null}
                </p>
                <AddWorkoutListForm /><br></br><br></br>
                <footer className="blockquote-footer">
                    Created by: {user}
                </footer>
            </blockquote>
            </Card.Body>
      </Card>
    );
}

export default WorkoutItem;