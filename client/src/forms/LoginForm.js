import React, { useState } from 'react';

const LoginForm = ( { setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataInvalid, setDataInvalid] = useState(false);
    const [ noRoleChecked, setNoRoleChecked ] = useState(false);
    const [errors, setErrors] = useState([]);

    const [ selectedUserType, setSelectedUserType ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (selectedUserType !== "") {
            fetch("/"+selectedUserType+"-login", {
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
                   console.log(data);
                } 
                else {
                    setUser(data);
                    console.log(data)
                    setLoggedIn(true);
                }
            });
        } else {
            setLoggedIn(false);
            setNoRoleChecked(true);
        }
        
    }

    function handleButtonChange(e) {
        setSelectedUserType(e.target.value)
        e.target.classList.add('is-primary');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1><strong>Log Into ImAway</strong></h1>
                <h3>username:</h3>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <h3>password:</h3>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}>
                </input>

                <h3>I am a:</h3>
                    <button className="button" onClick={handleButtonChange} value="caregiver">Caregiver</button>
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
                <br></br>
                <br></br>
                <input type="submit" value="LOGIN"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : null}
                {noRoleChecked ? <div className="errors"><h3>Uh oh!</h3>Make sure to select a role.</div> : null}
            </form>
        </div>
    )
}
export default LoginForm;