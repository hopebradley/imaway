import React from 'react';

const Job = ( { job, user } ) => {

    return (
        <div className="job">
            <h3>{user.status}</h3>
            <h3>{job.title}</h3>
            <h3>{job.category}</h3>
            <p>${job.salary} {job.salary_type}</p>
            {user.status === "caregiver" ? <button>I'm interested!</button> : null}
        </div>
    )
}

export default Job;