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
        e.preventDefault();
        setSelectedUserType(e.target.value);
        e.target.classList.add('is-info', 'is-light');
        Array.from(e.target.parentElement.children).find(b => b.value !== e.target.value).classList.remove('is-info', 'is-light');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Log Into ImAway</h1>
                <div className="field">
                    <label className="label">username</label>
                    <input 
                        className="input is-info"
                        id="username"
                        type="text" 
                        value={username}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className="field">
                    <label className="label">password</label>
                    <input 
                        className="input is-info"
                        id="password"
                        type="text" 
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
            
                <label className="label">I am a:</label>
                <div className="select-user-type">
                    <button className="button is-outlined" onClick={handleButtonChange} value="caregiver">Caregiver</button>
                    <button className="button is-outlined" onClick={handleButtonChange} value="employer">Employer</button>
                </div>
                <input className="button is-info is-medium" type="submit" value="LOGIN"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : null}
                {noRoleChecked ? <div className="errors"><h3>Uh oh!</h3>Make sure to select a role.</div> : null}
            </form>
        </div>
    )
}
export default LoginForm;