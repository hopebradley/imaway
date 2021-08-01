import React from 'react';
import UpcomingJobsContainer from '../containers/UpcomingJobsContainer';
import ProfileInfo from '../components/ProfileInfo';

const MyProfile = ( { user, jobs, loadData }) => {

    return (
        <div className="columns">
            <div className="column"><ProfileInfo user={user} loadData={loadData}/></div>
            <div className="column"><UpcomingJobsContainer user={user} jobs={jobs}/></div>
        </div>
        )
}
export default MyProfile;