import React from 'react';
import ProfileJobsContainer from '../containers/ProfileJobsContainer';
import ProfileInfo from '../components/ProfileInfo';

const ProfilePage = ( { user, jobs }) => {

    return (
        <div>
            <ProfileInfo user={user}/>
            <ProfileJobsContainer user={user} jobs={jobs}/>
        </div>
        )
}
export default ProfilePage;