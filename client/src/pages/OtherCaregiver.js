import React from 'react';

const OtherCaregiver = ( { params, loadData, caregivers}) => {

    function displayProfile() {
        const user = caregivers.find(c => c.id.toString() === params.user_id);
        return (
            <div className="box other-profile">
                    {/* <img src={user.img_url} className="profile-image" alt="profile"></img> */}
                    <br></br>
                    <br></br>
                    <h1>{user.name}</h1>
                    <h3><strong>@{user.username}</strong> • <em>{user.status}</em></h3>
                    <br></br>
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