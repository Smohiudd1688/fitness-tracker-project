import React, {useState} from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleShowSubmit(event) {
        event.preventDefault();
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePassChange(event) {
        setPassword(event.target.value);
    }

    return (
        <form className="logForms" onSubmit={handleShowSubmit}>
            <h3>Log In to The Fit Life</h3>
            <label htmlFor="username">Username: </label>
            <input onChange={handleUsernameChange} type="text" id="username" name="username" value={username} /><br></br><br></br>
            <label htmlFor="pass">Password: </label>
            <input onChange={handlePassChange} type="text" id="pass" name="pass" value={password} /><br></br><br></br>
            <input type="submit" />
        </form>
    );
}

export default LoginForm;