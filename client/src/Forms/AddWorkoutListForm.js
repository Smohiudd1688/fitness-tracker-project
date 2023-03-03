import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function AddWorkoutListForm({id, onWorkoutSubmit}) {
    const [isCompleteClick, setIsCompleteClick] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleTimeChange(event) {
        setTime(event.target.value);
    }

    function handleClick() {
        setIsCompleteClick(!isCompleteClick);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const completedWorkout = {
            workout_id: id,
            date: date,
            time: time
        }

        fetch("/user_workouts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(completedWorkout)
        })
        .then(res => res.json())
        .then(data => {
            onWorkoutSubmit(data.date, data);
        });

        setIsCompleteClick(false);
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
                            <label htmlFor="dateW">Date of Completion: </label>
                            <input onChange={handleDateChange} type="date" id="dateW" name="dateW" selected={date} />
                            <label htmlFor="time">Duration of Workout in Minutes: </label>
                            <input onChange={handleTimeChange} type="text" id="time" name="time" value={time} /><br></br><br></br>
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