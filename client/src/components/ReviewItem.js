import React from "react";

function ReviewItem({difficulty, wouldRepeat, description, user}) {
    return (
        <div>
            <p>
                Difficulty: {difficulty} / 5<br></br>
                Likelihood of Repeating Workout: {wouldRepeat} / 5<br></br>
                <em>{description}</em><br></br>
                <em>- {user}</em>
            </p>
        </div>
    )
}

export default ReviewItem;