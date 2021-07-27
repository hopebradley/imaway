import React from 'react';
import JobsContainer from '../containers/JobsContainer';
import JobForm from '../forms/JobForm';

const CalendarPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="jobs-page">
            <JobsContainer jobs={jobs} user={user} loadData={loadData} />
            <JobForm user={user} loadData={loadData}/>
        </div>
    )
}

export default CalendarPage;