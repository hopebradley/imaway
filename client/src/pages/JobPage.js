import React from 'react';
import JobsContainer from '../containers/JobsContainer';
import JobForm from '../forms/JobForm';

const JobPage = ( { jobs, user, loadData } ) => {

    return (
        <div className="jobs-page">
            <JobsContainer jobs={jobs} user={user} loadData={loadData} />
            {user.status === "employer" ? <JobForm user={user} loadData={loadData}/> : null}
        </div>
    )
}

export default JobPage;