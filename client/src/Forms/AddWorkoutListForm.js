import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function AddWorkoutListForm({name, time, exercises, user, currentUser, workouts, setWorkouts, onWorkoutSubmit}) {
    const [isCompleteClick, setIsCompleteClick] = useState(false);
    const [date, setDate] = useState(new Date());
    const [errors, setErrors] = useState([]);

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleClick() {
        setIsCompleteClick(!isCompleteClick);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsCompleteClick(false);

        const workout = {
            title: name,
            time: time,
            date: date,
            exercises: exercises,
            username: user,
            user_id: currentUser.id
        }

        fetch("/workouts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(workout)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(resWorkout => {
                    setWorkouts([...workouts, resWorkout])
                })
            } else {
                res.json().then(e => setErrors(e.errors))
            }
        });

        onWorkoutSubmit(date);
    }

    return(
        <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            show={isCompleteClick}
            overlay={
                <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">{`Add this Workout`}</Popover.Header>
                    <Popover.Body>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="dateW">When did you complete the workout? </label>
                            <input onChange={handleDateChange} type="date" id="dateW" name="dateW" selected={date} />
                            <input type="submit" />
                        </form>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button onClick={handleClick} bg="primary">I Completed this Workout!</Button>
        </OverlayTrigger>
    )
}

export default AddWorkoutListForm;