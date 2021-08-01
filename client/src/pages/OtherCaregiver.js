import React from 'react';

const OtherCaregiver = ( { params, loadData, caregivers}) => {

    function displayProfile() {
        const user = caregivers.find(c => c.id.toString() === params.user_id);
        return (
            <div className="box other-profile">
                <img src={user.img_url} className="profile-image" alt="profile"></img>
                <h1 className="title-text">{user.name}</h1>
                <h4>{user.status}</h4>
                <h3>@{user.username}</h3>
                <p>{user.bio}</p>
            </div>
        )
    }

    return (
        <div>
            {displayProfile()}
        </div>
    )

}

export default OtherCaregiver;