import React, { useState } from 'react';

const LoginForm = ( { status, setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    const [ selectedLoginType, setSelectedLoginType ] = useState("caregiver");

    status = status[0].toUpperCase() + status.slice(1);

    function handleSubmit(e) {
        console.log(e.target)
        e.preventDefault();
        fetch("/"+selectedLoginType+"s", {
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
                console.log(data)
                setLoggedIn(true);
            }
        });
    }

    function handleButtonChange(e) {
        setSelectedLoginType(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>ImAway {status} Login</h2>
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
                        checked={selectedLoginType == "caregiver"} 
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
                        checked={selectedLoginType == "employer"} 
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