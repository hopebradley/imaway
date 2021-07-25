
import React, { useState } from 'react';

const Job = ( { job, user, loadData } ) => {

    // const [ interestedClicked, setInterestedClicked ] = useState(false);
    const [ interestButtonText, setInterestButtonText ] = useState("I'm interested!");

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
        .then(resp => resp.json())
        .then((data) => {
            if (!data.hasOwnProperty('errors')) {
                // setInterestedClicked(true)
                setInterestButtonText("We'll let the employer know.")
                loadData();
            } else {
                setInterestButtonText("You've already expressed interest in this job!")
            }
            
        });
    }

    return (
        <div className="job">
            <h3>{job.employer.name}</h3>
            <h3>{job.title}</h3>
            <h3>{job.category}</h3>
            Caregiver: {job.caregiver ? <p>{job.caregiver.name}</p> : "position open"}
            <p>${job.salary} {job.salary_type}</p>
            {user.status === "caregiver" ? <button onClick={handleClick}>{interestButtonText}</button> : null}
            {/* {interestedClicked ? <div className="positive-message">We'll let the employer know!</div> : null } */}
        </div>
    )
}

export default Job;