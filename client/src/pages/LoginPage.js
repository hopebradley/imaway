import React, { useState } from 'react';
import SignUpForm from '../forms/SignUpForm';
import LoginForm from '../forms/LoginForm';

const LoginPage = ( { setUser, setLoggedIn }) => {

    const [ hasAccount, setHasAccount ] = useState(true);



    function showLoginOrSignup() {
        if (hasAccount) {
            return (
                <div className="login-page">
                    <LoginForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <div className="question">
                        <p>Don't have an account?</p>
                        <button onClick={()=> setHasAccount(false)}>Sign Up</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="login-page">
                    <SignUpForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <div className="question">
                        <p>Already have an account?</p>
                        <button onClick={()=> setHasAccount(true)}>Login</button>
                    </div>
                </div>
            )
        }
    }



    return (
        <div>
            {showLoginOrSignup()}
        </div>
    )
}
export default LoginPage;