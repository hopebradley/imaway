import React, { useState } from 'react';

const ProfileInfo = ( { setLoggedIn, user, loadData }) => {

    const [ editingProfile, setEditingProfile ] = useState(false);
    const [ name, setName ] = useState(user.name);
    const [ username, setUsername ] = useState(user.username);
    const [ bio, setBio ] = useState(user.bio);
    


    function displayProfile() {
        if (editingProfile) {
            console.log(name, username, bio)
            return (
                <div>
                    <form className="edit-profile-form" onSubmit={handleSubmit}>
                        <img src={user.img_url} className="profile-image" alt="profile"></img>
                        <p>Name:</p>
                        <input 
                            className="edit-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                        <p>Username:</p>
                        <input 
                            className="edit-username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}>
                        </input>
                        <p>Bio:</p>
                        <textarea 
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}>
                        </textarea>
                        <br></br>
                        <input className="button is-info is-light" type="submit" value="DONE EDITING"></input>
                    </form>
                </div>
            )
        }
        else {
            let num;
            if (user.phone_number) {
                num="("+user.phone_number.substr(2,3)+") "+user.phone_number.substr(5,3)+"-"+user.phone_number.substr(8)
            }
            return (
                <div className="box profile-info">
                    <img src={user.img_url} className="profile-image" alt="profile"></img>
                    <br></br>
                    <br></br>
                    <h1>{user.name}</h1>
                    <h3><strong>@{user.username}</strong> • <em>{user.status}</em></h3>
                    {user.phone_number ? <p>{num}</p> : null}
                    <br></br>
                    <p>{user.bio}</p>
                    <br></br>
                    <button className="button is-info is-light is-outlined" onClick={() => setEditingProfile(true)}>EDIT PROFILE</button>
                    <button className="button is-danger is-light is-outlined" onClick={handleDeleteProfile}>DELETE PROFILE</button>
                </div>
            )
        }
    }

    function handleDeleteProfile() {
        fetch('/'+user.status+"s/"+user.id, {
            method: "DELETE",
        })
        .then(() => setLoggedIn(false));
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/'+user.status+"s/"+user.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                username: username,
                bio: bio
            })
        })
        .then(() => {
            setEditingProfile(false);
            loadData();
        })
       
    }

    return (
        <div className="profile-info">
            {displayProfile()}
        </div>
        )
}
export default ProfileInfo;