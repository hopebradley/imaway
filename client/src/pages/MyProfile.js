import React from 'react';
import ProfileJobsContainer from '../containers/ProfileJobsContainer';
import ProfileInfo from '../components/ProfileInfo';

const MyProfile = ( { user, jobs, loadData }) => {

    return (
        <div className="columns">
            <div className="column"><ProfileInfo user={user} loadData={loadData}/></div>
            <div className="column"><ProfileJobsContainer user={user} jobs={jobs}/></div>
        </div>
        )
}
export default MyProfile;