import React, {useState} from "react";
import SignupForm from "../Forms/SignupForm";
import LoginForm from "../Forms/LoginForm";

function Login(onLogin) {
    const [hasLogin, setHasLogin] = useState(true);

    function handleHasLoginChange() {
        setHasLogin(!hasLogin);
    }
    return (
        <div>
            <br></br><br></br><br></br>
            <h1><strong>The Fit Life</strong></h1><br></br>
            {hasLogin ? <LoginForm /> : <SignupForm />} <br></br>
            {hasLogin ? 
                <p>Don't have an account? <em onClick={handleHasLoginChange} className="logButton">Sign up</em></p> : 
                <p>Already have an account? <em onClick={handleHasLoginChange}  className="logButton">Log in</em></p>
            }
        </div>
    );
}

export default Login;