import React, {useState} from "react";

function SignupForm({setCurrentUser}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [monthlyGoal, setMonthlyGoal] = useState();
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            username: username, 
            password: password,
            monthly_goal: monthlyGoal
        }

        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => setCurrentUser(user))
            } else {
                res.json().then(e => setErrors(e.errors))
            }
        })
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePassChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPassChange(event) {
        setConfirmPassword(event.target.value);
    }

    function handleMonthlyGoalChange(event) {
        setMonthlyGoal(event.target.value);
    }

    const renderErrors = errors.map((error, index) => {
        return (
            <p className="errors" key={index}>* {error}</p>
        );
    })

    return (
        <div>
            {errors.length !== 0 ? renderErrors : null}
            <form className="logForms" onSubmit={handleSubmit}>
                <h3>Sign Up for The Fit Life</h3>
                <label htmlFor="fname">First Name: </label>
                <input onChange={handleFirstNameChange} type="text" id="fname" name="fname" value={firstName} /><br></br><br></br>
                <label htmlFor="lname">Last Name: </label>
                <input onChange={handleLastNameChange} type="text" id="lname" name="lname" value={lastName} /><br></br><br></br>
                <label htmlFor="username">Username: </label>
                <input onChange={handleUsernameChange} type="text" id="username" name="username" value={username} /><br></br><br></br>
                <label htmlFor="pass">Password: </label>
                <input onChange={handlePassChange} type="password" id="pass" name="pass" value={password} /><br></br><br></br>
                <label htmlFor="confirmPass">Confirm Password: </label>
                <input onChange={handleConfirmPassChange} type="password" id="confirmPass" name="confirmPass" value={confirmPassword} /><br></br><br></br>
                <label htmlFor="monthlyGoal">Monthly Workout Goal: </label>
                <input onChange={handleMonthlyGoalChange} type="text" id="monthlyGoal" name="monthlyGoal" value={monthlyGoal} /><br></br><br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

export default SignupForm;