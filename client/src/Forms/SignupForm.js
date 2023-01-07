import React, {useState} from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [weeklyGoal, setWeeklyGoal] = useState();

    function handleSubmit(event) {
        event.preventDefault();
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

    function handleWeeklyGoalChange(event) {
        setWeeklyGoal(event.target.value);
    }

    return (
        <form className="logForms" onSubmit={handleSubmit}>
            <h3>Sign Up for The Fit Life</h3>
            <label htmlFor="fname">First Name: </label>
            <input onChange={handleFirstNameChange} type="text" id="fname" name="fname" value={firstName} /><br></br><br></br>
            <label htmlFor="lname">Last Name: </label>
            <input onChange={handleLastNameChange} type="text" id="fname" name="fname" value={lastName} /><br></br><br></br>
            <label htmlFor="username">Username: </label>
            <input onChange={handleUsernameChange} type="text" id="username" name="username" value={username} /><br></br><br></br>
            <label htmlFor="pass">Password: </label>
            <input onChange={handlePassChange} type="text" id="pass" name="pass" value={password} /><br></br><br></br>
            <label htmlFor="confirmPass">Confirm Password: </label>
            <input onChange={handleConfirmPassChange} type="text" id="confirmPass" name="confirmPass" value={confirmPassword} /><br></br><br></br>
            <label htmlFor="weeklyGoal">Monthly Workout Goal: </label>
            <input onChange={handleWeeklyGoalChange} type="text" id="weeklyGoal" name="weeklyGoal" value={weeklyGoal} /><br></br><br></br>
            <input type="submit" />
        </form>
    );
}

export default SignupForm;