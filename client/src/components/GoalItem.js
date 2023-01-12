import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateGoalForm from "../Forms/UpdateGoalForm";
import CompletedGoalItem from "./CompletedGoalItem";


function GoalItem({id, title, starting, current, goal, endDate, goals, setGoals}) {
    const [isCompleted, setIsComplete] = useState(false);

    function handleUpdateSubmit(updatedCurrent) {
      const updatedGoals = goals.map(goalItem => {
        if (goalItem.id === updatedCurrent.id) {
          return updatedCurrent;
        }
        return goalItem;
      });

      setGoals(updatedGoals);

      if(starting > goal && updatedCurrent.current <= goal || starting < goal && updatedCurrent.current >= goal) {
        setIsComplete(true);
      }  

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
              <Card border="success" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Body>
                  {isCompleted ? <Card.Title id="finished"><strong>FINISHED</strong></Card.Title> : null}
                  <Card.Title><strong>{title}</strong></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><strong>Goal:</strong> {goal}</Card.Subtitle>
                  <Card.Text>
                    <strong>Where you started:</strong> {starting}<br></br>
                    <strong>Where you are at:</strong> {current}<br></br>
                    <strong>When you want to achieve it by:</strong> {endDate}
                  </Card.Text>
                  {!isCompleted ? <UpdateGoalForm 
                    onUpdateSubmit={handleUpdateSubmit}
                    id={id}
                  /> : null}
                  {!isCompleted ? <Button onClick={handleDeleteGoal} variant="outline-primary" id="delete">Delete Goal</Button> : null}
                </Card.Body>
              </Card><br></br><br></br>
        </div>
    );
}

export default GoalItem;