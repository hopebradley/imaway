import React from 'react';
import Job from '../components/Job';

const CalendarPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="job-list">
            {jobs.map(job => <Job key={job.id} job={job} user={user} loadData={loadData} />)}
        </div>
    )
}

export default CalendarPage;