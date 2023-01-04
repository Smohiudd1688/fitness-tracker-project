import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CompletedGoalItem({title, goal}) {
    return(
        <div>
            <Card bg="dark" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title><strong>{title}</strong></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Goal:</strong> {goal}</Card.Subtitle>
                  <Card.Text>
                    <strong>You Completed this Goal!</strong><br></br>
                  </Card.Text>
                </Card.Body>
              </Card><br></br><br></br>
        </div>
    );
}

export default CompletedGoalItem;