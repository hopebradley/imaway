import React, { useState } from 'react';

const ProfileInfo = ( { user }) => {

    const [ editingProfile, setEditingProfile ] = useState(false);


    function displayProfile() {
        if (editingProfile) {
            return (
                <div>
                    <h3>editing</h3>
                    <button onClick={() => setEditingProfile(false)}>DONE</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <img src={user.img_url} className="profile-image" alt="profile"></img>
                    <h1>{user.name}</h1>
                    <h2>{user.constructor.name}</h2>
                    <h3>@{user.username}</h3>
                    <p>{user.bio}</p>
                    <br></br>
                    <button onClick={() => setEditingProfile(true)}>EDIT PROFILE</button>
                </div>
            )
        }
    }

    return (
        <div className="profile-info">
            {displayProfile()}
        </div>
        )
}
export default ProfileInfo;