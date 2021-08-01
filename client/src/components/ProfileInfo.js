import React, { useState } from 'react';

const ProfileInfo = ( { user, loadData }) => {

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
                        <input type="submit" value="DONE EDITING"></input>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="box">
                    <img src={user.img_url} className="profile-image" alt="profile"></img>
                    <h1>{user.name}</h1>
                    <h4>{user.status}</h4>
                    <h3><strong>@{user.username}</strong></h3>
                    <p>{user.bio}</p>
                    <br></br>
                    <button className="button is-info is-light is-outlined" onClick={() => setEditingProfile(true)}>EDIT PROFILE</button>
                </div>
            )
        }
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