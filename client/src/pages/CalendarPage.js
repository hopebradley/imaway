import React from 'react';
import Job from '../components/Job';
import JobForm from '../forms/JobForm';

const CalendarPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="job-list">
            {jobs.map(job => <Job key={job.id} job={job} user={user} loadData={loadData} />)}
            <JobForm />
        </div>
    )
}

export default CalendarPage;