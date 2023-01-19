import React, {useState} from "react";
import SignupForm from "../Forms/SignupForm";
import LoginForm from "../Forms/LoginForm";

function Login({setCurrentUser, setIsLogged, setGoals}) {
    const [hasLogin, setHasLogin] = useState(true);

    function handleHasLoginChange() {
        setHasLogin(!hasLogin);
    }
    
    return (
        <div>
            <br></br><br></br><br></br>
            <h1><strong>The Fit Life</strong></h1><br></br>
            {hasLogin ? 
                <LoginForm setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} setGoals={setGoals}/> 
                : <SignupForm setCurrentUser={setCurrentUser} setGoals={setGoals} setIsLogged={setIsLogged}/>} <br></br>
            {hasLogin ? 
                <p className="logPage">Don't have an account? <em onClick={handleHasLoginChange} className="logButton">Sign up</em></p> : 
                <p className="logPage">Already have an account? <em onClick={handleHasLoginChange}  className="logButton">Sign in</em></p>
            }
        </div>
    );
}

export default Login;