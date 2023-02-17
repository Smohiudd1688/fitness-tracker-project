import React, {useState} from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function UpdateGoalForm({starting, goal, onUpdateSubmit, id}) {
    const [updatedCurrent, setUpdatedCurrent] = useState("");
    const [isUpdateClick, setIsUpdateClick] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        let isComplete = false;

        if((starting > goal && updatedCurrent <= goal) || (starting < goal && updatedCurrent >= goal)) {
            isComplete = true;
        }

        fetch(`/goals/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
              current: updatedCurrent,
              completed: isComplete
            })
          })
          .then(res => res.json())
          .then(data => onUpdateSubmit(data));

        setIsUpdateClick(!isUpdateClick);
        setUpdatedCurrent("");
    }

    function handleUpdatedCurrent(event) {
        setUpdatedCurrent(event.target.value);

    }

    function handleClick() {
        setIsUpdateClick(!isUpdateClick);
    }
    
    return (
        <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            show={isUpdateClick}
            overlay={
                <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">{`Update Goal`}</Popover.Header>
                    <Popover.Body>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="current">What is your progress? </label>
                            <input onChange={handleUpdatedCurrent} type="text" id="current" name="current" value={updatedCurrent} />
                            <input type="submit" />
                        </form>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button onClick={handleClick} variant="primary">Update Goal</Button>
        </OverlayTrigger>
    )
}

export default UpdateGoalForm;