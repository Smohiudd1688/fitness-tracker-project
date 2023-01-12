import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateGoalForm from "../Forms/UpdateGoalForm";


function GoalItem({id, title, starting, current, completed, goal, endDate, goals, setGoals}) {
    function handleUpdateSubmit(updatedCurrent) {
      const updatedGoals = goals.map(goalItem => {
        if (goalItem.id === updatedCurrent.id) {
          return updatedCurrent;
        }
        return goalItem;
      });

      setGoals(updatedGoals);  
    }

    function handleDeleteGoal() {
      fetch(`/goals/${id}`, {
        method: "DELETE",
      })
      .then((r) => {
        if (r.ok) {
          const updatedGoals = goals.filter(goal => {
            return goal.id !== id
          })
          setGoals(updatedGoals);
        }
      })
    }

    return (
        <div>
              <Card id="goalCard" border="success" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title><strong>{title}</strong></Card.Title>
                  {completed ? <Card.Title className="finished"><strong>FINISHED</strong></Card.Title> : null}
                  <Card.Subtitle className="mb-2 text-muted"><strong>Goal:</strong> {goal}</Card.Subtitle>
                  <Card.Text>
                    <strong>Where you started:</strong> {starting}<br></br>
                    <strong>Where you are at:</strong> {current}<br></br>
                    <strong>When you want to achieve it by:</strong> {endDate}
                  </Card.Text>
                  {!completed ? <UpdateGoalForm 
                    starting={starting}
                    goal={goal}
                    onUpdateSubmit={handleUpdateSubmit}
                    id={id}
                  /> : null}
                  {!completed ? <Button onClick={handleDeleteGoal} variant="outline-primary" id="delete">Delete Goal</Button> : null}
                </Card.Body>
              </Card><br></br><br></br>
        </div>
    );
}

export default GoalItem;