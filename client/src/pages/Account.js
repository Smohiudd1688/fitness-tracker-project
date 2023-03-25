import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Account({currentUser, onChangeAccount, setCurrentUser, setWorkouts, setGoals, setIsLogged}) {
    function handleUpdate(e) {
        e.preventDefault();

        const user = {
            first_name: currentUser.first_name,
            last_name: currentUser.last_name,
            monthly_goal: currentUser.monthly_goal
        }

        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => setCurrentUser(data));
    }

    function handleLogout() {
        fetch('/login', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
              setCurrentUser(null);
              setWorkouts([]);
              setGoals([]);
              setIsLogged(false);
            }
        })
    }


    return (
        <div>
            <h1 className="pageH">Account Information</h1>
            <Form id="accountForm">
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("firstName", e.target.value)} type="text" value={currentUser.first_name} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("lastName", e.target.value)} type="text" value={currentUser.last_name} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder={currentUser.username} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Monthly Workout Goal</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("monthlyGoal", e.target.value)} type="text" value={currentUser.monthly_goal} />
                </Form.Group><br></br>
                <div className="buttDiv">
                <Button onClick={handleUpdate} className="butt" variant="primary" type="submit">
                    Update
                </Button>
                </div>
            </Form><br></br>
            <div className="buttDiv">
                <Button onClick={handleLogout} className="butt" variant="outline-primary">
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default Account;