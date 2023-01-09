import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login from "./Login";

function Account({fname, lname, username, monthlyGoal, onChangeAccount, setCurrentUser}) {
    function handleUpdate(e) {
        e.preventDefault();
    }

    function handleLogout() {
        fetch('/login', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
              setCurrentUser(null);
            }
        })

        return <Login setCurrentUser={setCurrentUser} />;
    }


    return (
        <div>
            <h1 className="pageH">Account Information</h1>
            <Form id="accountForm">
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("firstName", e.target.value)} type="text" value={fname} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("lastName", e.target.value)} type="text" value={lname} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder={username} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Monthly Workout Goal</Form.Label>
                    <Form.Control onChange={(e) => onChangeAccount("monthlyGoal", e.target.value)} type="text" value={monthlyGoal} />
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