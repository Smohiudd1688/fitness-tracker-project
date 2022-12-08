import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function UpdateGoalForm() {
    function handleGoalUpdate() {

    }

    function handleFirstNameChange() {

    }
    return (
        <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            overlay={
                <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">{`Update Goal`}</Popover.Header>
                    <Popover.Body>
                        <form>
                            <label htmlFor="current">Where are you currently at? </label>
                            <input onChange={handleFirstNameChange} type="text" id="current" name="current" value="" />
                        </form>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button onClick={handleGoalUpdate} variant="primary">Update Goal</Button>
        </OverlayTrigger>
    )
}

export default UpdateGoalForm;