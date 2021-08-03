import React from 'react';
import UpcomingJobsContainer from '../containers/UpcomingJobsContainer';
import ProfileInfo from '../components/ProfileInfo';
import AlertsContainer from '../containers/AlertsContainer';

const MyProfile = ( { setLoggedIn, alerts, user, jobs, loadData }) => {

    return (
        <div>
            <div className="columns">
                <div className="column"><ProfileInfo user={user} loadData={loadData} setLoggedIn={setLoggedIn}/></div>
                <div className="column"><UpcomingJobsContainer user={user} jobs={jobs}/></div>
            </div>
            <AlertsContainer alerts={alerts} user={user} loadData={loadData}/>
        </div>
        )
}
export default MyProfile;