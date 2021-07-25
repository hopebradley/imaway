import React, { useState, useEffect } from 'react';
import Job from '../components/Job';

const CalendarPage = ( { jobs, user, loadJobs } ) => {

    return (
        <div className="job-list">
            {jobs.map(job => <Job job={job} user={user} loadJobs={loadJobs} />)}
        </div>
    )
}

export default CalendarPage;