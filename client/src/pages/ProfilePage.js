import React, { useState } from 'react';

const ProfilePage = ( { user }) => {

    return (
        <div>
            <h1>This is the profile page!</h1>
            {user.name}
            <br></br>
            <img src={user.img_url} className="profile-image"></img>
        </div>
    )
}
export default ProfilePage;