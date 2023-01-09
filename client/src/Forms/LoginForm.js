import React, {useState} from "react";

function LoginForm({setCurrentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleShowSubmit(event) {
        event.preventDefault();

        const user = {
            username: username,
            password: password
        }

        fetch('/login', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => setCurrentUser(user))
            } else {
                res.json().then(e => setErrors([...errors, e.errors]))
            }
        })
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePassChange(event) {
        setPassword(event.target.value);
    }

    const renderErrors = errors.map((error, index) => {
        return (
            <p className="errors" key={index}>* {error}</p>
        );
    })

    return (
        <div>
            {errors.length !== 0 ? renderErrors : null}
            <form className="logForms" onSubmit={handleShowSubmit}>
                <h3>Sign In to The Fit Life</h3>
                <label htmlFor="username">Username: </label>
                <input onChange={handleUsernameChange} type="text" id="username" name="username" value={username} /><br></br><br></br>
                <label htmlFor="pass">Password: </label>
                <input onChange={handlePassChange} type="password" id="pass" name="pass" value={password} /><br></br><br></br>
                <input type="submit" />
            </form>
        </div>
    );
}

export default LoginForm;