import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateGoalForm from "../Forms/UpdateGoalForm";


function GoalItem({title, starting, current, goal, endDate}) {
    const [isCompleted, setIsComplete] = useState(false);

    function handleUpdateSubmit(updatedCurrent) {
      if(starting > goal && updatedCurrent <= goal) {
        alert("Completed");
      } else if (starting < goal && updatedCurrent >= goal) {
        alert("Completed");
      }
      
    }

    return (
        <div>
              <Card border="success" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title><strong>{title}</strong></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Goal:</strong> {goal}</Card.Subtitle>
                  <Card.Text>
                    <strong>Where you started:</strong> {starting}<br></br>
                    <strong>Where you are at:</strong> {current}<br></br>
                    <strong>When you want to achieve it:</strong> {endDate}
                  </Card.Text>
                  <UpdateGoalForm 
                    onUpdateSubmit={handleUpdateSubmit}
                  />
                  <Button variant="outline-primary" id="delete">Delete Goal</Button>
                </Card.Body>
              </Card><br></br><br></br>
        </div>
    );
}

export default GoalItem;