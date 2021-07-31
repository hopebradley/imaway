import React from 'react';
import JobsContainer from '../containers/JobsContainer';
import JobForm from '../forms/JobForm';

const JobPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="jobs-page">
            <div className="column">{user.status === "employer" ? <JobForm user={user} loadData={loadData}/> : null}</div>
            <div className="column"><JobsContainer jobs={jobs} user={user} loadData={loadData} /></div>
        </div>
    )
}

export default JobPage;