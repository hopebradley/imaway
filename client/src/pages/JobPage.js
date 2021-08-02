import React from 'react';
import JobsContainer from '../containers/JobsContainer';
import JobForm from '../forms/JobForm';

const JobPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="jobs-page">
            {user.status === "employer" ? <JobForm user={user} loadData={loadData}/> : null}
            <JobsContainer jobs={jobs} user={user} loadData={loadData} />
        </div>
    )
}

export default JobPage;