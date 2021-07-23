import React from 'react';

const Job = ( { job } ) => {

    return (
        <div>
            <h3>{job.title}</h3>
            <h3>{job.category}</h3>
            <p>${job.salary} {job.salary_type}</p>
        </div>
    )
}

export default Job;