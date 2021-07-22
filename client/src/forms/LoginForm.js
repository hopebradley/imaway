import React, { useState } from 'react';

const LoginForm = ( { setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    const [ selectedUserType, setSelectedUserType ] = useState("caregiver");

    function handleSubmit(e) {
        e.preventDefault();
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
    }

    function handleButtonChange(e) {
        setSelectedUserType(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log Into ImAway</h2>
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

                <h3>Login as a:</h3>
                <label>
                    Caregiver
                    <input 
                        type="radio" 
                        value="caregiver" 
                        checked={selectedUserType === "caregiver"} 
                        className="select-login-type"
                        onChange={handleButtonChange}>
                    </input>
                </label>
                <br></br>
                or
                <br></br>
                <label>
                    Employer
                    <input 
                        type="radio" 
                        value="employer" 
                        checked={selectedUserType === "employer"} 
                        className="select-login-type"
                        onChange={handleButtonChange}>
                    </input>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="Login"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : <p></p>}
            </form>
        </div>
    )
}
export default LoginForm;