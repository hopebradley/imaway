import React from 'react';
import Job from '../components/Job';

const JobsContainer = ( { jobs, user, loadData } ) => {

    const caregiverJobs = jobs.filter(j => j.caregiver_id === null);
    const employerJobs = jobs.filter(j => j.employer_id === user.id);

    function displayJobs() {
        if (user.status === "caregiver") {
            return (
                <div className="job-list">
                    {caregiverJobs.map(job => <Job key={job.id} job={job} user={user} loadData={loadData}/>)}
                </div>
            )
        } else {
            return (
                <div className="job-list">
                    {employerJobs.map(job => <Job key={job.id} job={job} user={user} loadData={loadData}/>)}
                </div>

            )
        }
    }

    return (
        <div>
            {displayJobs()}
        </div>
    )
}

export default JobsContainer;