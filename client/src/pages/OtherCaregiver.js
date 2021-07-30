import React, { useState , useEffect } from 'react';

const OtherCaregiver = ( { params, loadData, caregivers}) => {

    const user = caregivers.find(c => c.id == params.user_id)

    return (
        <div className="profile-info">
            {console.log(user.name)}
            <img src={user.img_url} className="profile-image" alt="profile"></img>
            <h1>{user.name}</h1>
            <h4>{user.status}</h4>
            <h3>@{user.username}</h3>
            <p>{user.bio}</p>
        </div>
    )
}

export default OtherCaregiver;