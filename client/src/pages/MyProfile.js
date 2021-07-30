import React from 'react';
import ProfileJobsContainer from '../containers/ProfileJobsContainer';
import ProfileInfo from '../components/ProfileInfo';

const MyProfile = ( { user, jobs, loadData }) => {

    return (
        <div>
            <ProfileInfo user={user} loadData={loadData}/>
            <ProfileJobsContainer user={user} jobs={jobs}/>
        </div>
        )
}
export default MyProfile;