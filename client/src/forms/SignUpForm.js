import React, { useState } from 'react';

const SignUpForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [ selectedUserType, setSelectedUserType ] = useState("");


    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, username, bio, password, passwordConfirmation)
        fetch("/"+selectedUserType+"s", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username.toLowerCase(),
                name: name.toUpperCase(),
                bio: bio,
                img_url: imageUrl,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((resp) => resp.json())
        .then(data => {
            if (data.hasOwnProperty('errors')) {
                console.log(data.errors)
                setErrors(data.errors);
                setDataInvalid(true);
            }
            else {
                setUser(data);
                setLoggedIn(true);
                console.log(data)
            }   
        });
    }

    // function displayErrors() {
    //     return errors.map((e) => {
    //         return <p>-{e}</p>
    //     })
    // }

    function handleButtonChange(e) {
        setSelectedUserType(e.target.value);
    }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create an ImAway Account</h2>
                <p>I want to be a:</p>
                <label>
                    <input 
                        type="radio" 
                        value="caregiver" 
                        checked={selectedUserType === "caregiver"} 
                        className="select-login-type"
                        onChange={handleButtonChange}>
                    </input>
                    Caregiver
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="employer" 
                        checked={selectedUserType === "employer"} 
                        className="select-login-type"
                        onChange={handleButtonChange}>
                    </input>
                    Employer
                </label>
                <p>Name:</p>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <p>Username:</p>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <p>Bio:</p>
                <input 
                    id="bio"
                    type="text" 
                    value={bio}
                    autoComplete="off"
                    onChange={(e) => setBio(e.target.value)}>
                </input> 
                <p>Profile Picture URL:</p>
                <input 
                    id="img_url"
                    type="text" 
                    value={imageUrl}
                    autoComplete="off"
                    onChange={(e) => setImageUrl(e.target.value)}>
                </input> 
                <p>Password:</p>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <p>Password:</p>
                <input 
                    id="password-confirmation"
                    type="text" 
                    value={passwordConfirmation}
                    autoComplete="off"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type="submit" value="SIGN UP"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>-{e}</p> )}</div> : <p></p>}
            </form>
            
        </div>
    )
}

export default SignUpForm;