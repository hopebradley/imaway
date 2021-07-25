
import React, { useEffect } from 'react';

const Job = ( { job, user, loadJobs} ) => {

    // let employer;
    
    // useEffect({

    // })

    // fetch('/employers')
    // .then(resp => resp.json())
    // .then(data => {
    //     employer = data.find(e => e.id === job.employer_id)
    // });

    let caregiver = "job available";

    function handleClick() {
        fetch('/jobs/'+job.id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caregiver_id: user.id
            })
        })
        .then(() => loadJobs());
    }

    return (
        <div className="job">
            {console.log(job)}
            <h3>{job.employer.name}</h3>
            <h3>{job.title}</h3>
            <h3>{job.category}</h3>
            {job.caregiver ? <p>{job.caregiver.name}</p> : ""}
            <p>${job.salary} {job.salary_type}</p>
            {user.status === "caregiver" ? <button onClick={handleClick}>I'm interested!</button> : null}
        </div>
    )
}

export default Job;