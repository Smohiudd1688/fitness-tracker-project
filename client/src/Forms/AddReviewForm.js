import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function AddReviewForm({currentUser, workout_id, reviews, setReviews}) {
    const [isAddClick, setIsAddClick] = useState(false);
    const [difficulty, setDifficulty] = useState("");
    const [wouldRepeat, setWouldRepeat] = useState("");
    const [description, setDescription] = useState("");

    function handleDifficultyChange(event) {
        setDifficulty(event.target.value);
    }

    function handleRepeatChange(event) {
        setWouldRepeat(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleClick() {
        setIsAddClick(!isAddClick);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsAddClick(!isAddClick);

        const review = {
            difficulty: difficulty,
            would_repeat: wouldRepeat,
            description: description,
            username: currentUser.username,
            workout_id: workout_id,
            user_id: currentUser.id
        }

        fetch('/reviews', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(review)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(resReview => {
                    setReviews([...reviews, resReview])
                })
            }
        })

        setDifficulty("");
        setWouldRepeat("");
        setDescription("");

    }

    return(
        <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            show={isAddClick}
            overlay={
                <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">{`Add a Review`}</Popover.Header>
                    <Popover.Body>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="diff">On a scale of 1-5, how difficult would you rate this workout? </label>
                            <select id="diff" value={difficulty} onChange={handleDifficultyChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <label htmlFor="repeat">On a scale of 1-5, how likely or you to repeat this workout? </label>
                            <select id="repeat" value={wouldRepeat} onChange={handleRepeatChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <label htmlFor="description">How would you describe this workout? </label>
                            <textarea rows="5" cols="30" id="description" value={description} onChange={handleDescriptionChange} />
                            <input type="submit" />
                        </form>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button className="review" onClick={handleClick} variant="outline-primary">Add Review</Button>
        </OverlayTrigger>
    )
}

export default AddReviewForm;