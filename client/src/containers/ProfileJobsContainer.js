import React from 'react';
import ProfileJob from '../components/ProfileJob';

const ProfileJobsContainer = ( {user, jobs, loadData} ) => {

    const caregiverJobs = jobs.filter(j => j.caregiver_id === user.id);
    const employerJobs = jobs.filter(j => j.employer_id = user.id && j.caregiver_id);

    function displayProfileJobs() {
        if (user.status === "caregiver") {
            return (
                <div>
                    {caregiverJobs.length > 0 ? caregiverJobs.map(job => <ProfileJob key={job.id} job={job} user={user} loadData={loadData}/>) : <h3>None yet!</h3>}
                </div>
            )
        } else {
            return (
                <div>
                    {employerJobs.length > 0 ? employerJobs.map(job => <ProfileJob key={job.id} job={job} user={user} loadData={loadData}/>): <h3>None yet!</h3>}
                </div>

            )
        }
    }

    return (
        <div className="profile-jobs">
            <h2>Upcoming:</h2>
            {displayProfileJobs()}
        </div>
    )
}

export default ProfileJobsContainer;