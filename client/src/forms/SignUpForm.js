import React, { useState } from 'react';

const SignUpForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [ imageUrl, setImageUrl ] = useState("/default_profile_image.jpeg");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [ selectedUserType, setSelectedUserType ] = useState("");


    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (selectedUserType) {
            fetch("/"+selectedUserType+"s", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username.toLowerCase(),
                    name: name,
                    bio: bio,
                    img_url: imageUrl,
                    password: password,
                    password_confirmation: passwordConfirmation,
                    status: selectedUserType.toLowerCase()
                })
            })
            .then((resp) => resp.json())
            .then(data => {
                if (data.hasOwnProperty('errors')) {
                    console.log(data.errors)
                    setErrors(data.errors);
                    setDataInvalid(true);
                    setLoggedIn(false);
                } else {
                    setUser(data);
                    setLoggedIn(true);
                    console.log(data)
                }   
            });
        } else {
            setErrors(["User type must be selected!"]);
            setDataInvalid(true);
        } 
    }

    // function displayErrors() {
    //     return errors.map((e) => {
    //         return <p>-{e}</p>
    //     })
    // }

    function handleButtonChange(e) {
        e.preventDefault();
        setSelectedUserType(e.target.value);
        e.target.classList.add('is-info', 'is-light');
        Array.from(e.target.parentElement.children).find(b => b.value !== e.target.value).classList.remove('is-info', 'is-light');
    }

    function displayForm() {
        return (
            <div>
                <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                className="input is-info"
                                placeholder="Jane Doe"
                                id="name"
                                type="text" 
                                value={name}
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}>
                            </input>
                        </div>    
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input 
                                placeholder="janedoe"
                                className="input is-info"
                                id="username"
                                type="text" 
                                value={username}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}>
                            </input>
                        </div>    
                    </div>
                    <div className="field">
                        <label className="label">Bio</label>
                        <div className="control">
                            <input 
                                className="input is-info"
                                placeholder="19-year-old babysitter and petsitter..."
                                id="bio"
                                type="text" 
                                value={bio}
                                autoComplete="off"
                                onChange={(e) => setBio(e.target.value)}>
                            </input>
                        </div>    
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input 
                                className="input is-info"
                                id="password"
                                type="text" 
                                value={password}
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </div>    
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input 
                                className="input is-info is-required"
                                id="password-confirmation"
                                type="text" 
                                value={passwordConfirmation}
                                autoComplete="off"
                                onChange={(e) => setPasswordConfirmation(e.target.value)}>
                            </input>
                        </div>    
                    </div>
                    <input className="button is-medium is-info" type="submit" value="SIGN UP"></input>
                </div>
        )
    }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up For ImAway</h1>
                <div className="field">
                    <label className="label">I want to be a</label>
                    <div className="control">
                        <div className="select-user-type">
                            <button className="button is-outlined" onClick={handleButtonChange} value="caregiver">Caregiver</button>
                            <button className="button is-outlined" onClick={handleButtonChange} value="employer">Employer</button>
                        </div>
                    </div>    
                </div>
                {selectedUserType ? displayForm() : null}
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>• {e}</p> )}</div> : <p></p>}
            </form>
            
        </div>
    )
}

export default SignUpForm;