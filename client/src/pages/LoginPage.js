import React, { useState } from 'react';
import SignUpForm from '../forms/SignUpForm';
import LoginForm from '../forms/LoginForm';

const LoginPage = ( { setUser, setLoggedIn }) => {

    const [ hasAccount, setHasAccount ] = useState(true);



    function showLoginOrSignup() {
        if (hasAccount) {
            return (
                <div>
                    <LoginForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <div className="content question">
                        <h6>New?</h6>
                        <button className="button is-success" onClick={()=> setHasAccount(false)}>CREATE AN ACCOUNT</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <SignUpForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <div className="content question">
                        <h6>Have an account?</h6>
                        <button className="button is-success" onClick={()=> setHasAccount(true)}>LOGIN</button>
                    </div>
                </div>
            )
        }
    }



    return (
        <div className="box login-page">
            {showLoginOrSignup()}
        </div>
    )
}
export default LoginPage;