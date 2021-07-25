import React, { useState, useEffect } from 'react';
import Job from '../components/Job';

const CalendarPage = ( { jobs, user, loadJobs, loadAlerts } ) => {

    return (
        <div className="job-list">
            {jobs.map(job => <Job job={job} user={user} loadJobs={loadJobs} loadAlerts={loadAlerts} />)}
        </div>
    )
}

export default CalendarPage;