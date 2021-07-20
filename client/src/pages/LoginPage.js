import React, { useState } from 'react';
import SignUpForm from '../forms/SignUpForm';
import LoginForm from '../forms/LoginForm';

const LoginPage = ( { setUser, setLoggedIn, setUserType }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [ caregiverLogin, setCaregiverLogin ] = useState(false);
    const [ employerLogin, setEmployerLogin ] = useState(false);

    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleCaregiverSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((resp) => resp.json())
        .then(data => {
            if (data.hasOwnProperty('errors')) {
               setLoggedIn(false);
               setDataInvalid(true);
               setErrors(data.errors);
            } 
            else {
                setUser(data);
                setUserType("caregiver")
                console.log(data)
                setLoggedIn(true);
            }
        });
    }

    function handleClick(e) {
        if (e.target.id == "employer") {
            setEmployerLogin(true);
            setCaregiverLogin(false);
        } else {
            setEmployerLogin(false);
            setCaregiverLogin(true);
        }
    }



    return (
        <div>
            { !caregiverLogin ? <button id="caregiver"onClick={handleClick}>Login As Caregiver</button> : <LoginForm status="caregiver"/> }
            { !employerLogin ? <button id="employer" onClick={handleClick}>Login As Employer</button> : <LoginForm status="employer"/> }
        </div>
    )
}
export default LoginPage;