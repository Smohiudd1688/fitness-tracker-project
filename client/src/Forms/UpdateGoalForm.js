import React, {useState} from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function UpdateGoalForm({onUpdateSubmit}) {
    const [updatedCurrent, setUpdatedCurrent] = useState();
    const [isUpdateClick, setIsUpdateClick] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setIsUpdateClick(!isUpdateClick);
        onUpdateSubmit(updatedCurrent);
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