
import React, { useEffect } from 'react';

const Job = ( { job, user, loadData } ) => {

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
        console.log("Hi")
        fetch('/alerts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: "is interested in "+job.title,
                sender_id: user.id,
                job_id: job.id
            })
        })
        .then(() => loadData());
    }

    return (
        <div className="job">
            <h3>{job.employer.name}</h3>
            <h3>{job.title}</h3>
            <h3>{job.category}</h3>
            Caregiver: {job.caregiver ? <p>{job.caregiver.name}</p> : "position open"}
            <p>${job.salary} {job.salary_type}</p>
            {user.status === "caregiver" ? <button onClick={handleClick}>I'm interested!</button> : null}
        </div>
    )
}

export default Job;