import React, { useState } from 'react';
import AlertsPage from '../pages/AlertsPage';

const Job = ( { job, user, loadData } ) => {

    // const [ interestedClicked, setInterestedClicked ] = useState(false);
    const [ interestButtonText, setInterestButtonText ] = useState("I'm interested!");

    function handleInterestButtonClick() {
        console.log("Hi")
        fetch('/alerts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: "is interested in ",
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

    function handleDeleteButtonClick() {
        console.log("hi")
        fetch('/jobs/'+job.id, {
            method: 'DELETE'
        })
        .then(() => {
            loadData();
        })

    }

    const start = job.date.split("-")[0];
    const end = job.date.split("-")[1];

    function displayJob() {
        if (user.status === "caregiver") {
            return (
                <div className="job">
                    <h3>{job.employer.name}</h3>
                    <h3>{job.title}</h3>
                    <h3>{job.category}</h3>
                    <p><strong>Starts:</strong> {start}</p>
                    <p><strong>Ends:</strong> {end}</p>
                    Caregiver: {job.caregiver ? <p>{job.caregiver.name}</p> : "position open"}
                    <p>${job.salary} {job.salary_type}</p>
                    {user.status === "caregiver" ? <button onClick={handleInterestButtonClick}>{interestButtonText}</button> : null}
                    {/* {interestedClicked ? <div className="positive-message">We'll let the employer know!</div> : null } */}
                </div>

            )
        } else {
            return (
                <div className="job">
                    <h3>{job.title}</h3>
                    <h3>{job.category}</h3>
                    <p><strong>Starts:</strong> {start}</p>
                    <p><strong>Ends:</strong> {end}</p>
                    Current Caregiver: {job.caregiver ? <p>{job.caregiver.name}</p> : "position open"}
                    <p>${job.salary} {job.salary_type}</p>
                    <button>Edit Job</button>
                    <button onClick={handleDeleteButtonClick}>Delete Job</button>
                    <AlertsPage job={job} user={user} loadData={loadData}/>
                </div>

            )
        }
    }

    return (
        <div>
            {displayJob()}
        </div>
    )
}

export default Job;