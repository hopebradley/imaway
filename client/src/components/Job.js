import React, { useState } from 'react';
import AlertsPage from '../pages/AlertsPage';
import { Link } from 'react-router-dom';

const Job = ( { job, user, loadData } ) => {

    const [ interestButtonText, setInterestButtonText ] = useState("I'm interested!");
    const [ jobDeleted, setJobDeleted ] = useState(false);

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
            setJobDeleted(true);
            window.setTimeout(() => {
                loadData();
            }, 1000);
        })

    }

    const start = job.date.split("-")[0];
    const end = job.date.split("-")[1];

    function displayJob() {
        if (user.status === "caregiver") {
            const linkName = "/employers/"+job.employer.id;
            return (
                <div className="job box">
                    <h3>{job.title}</h3>
                    <Link to={linkName}><p>{job.employer.name}</p></Link>
                    <h3>{job.category}</h3>
                    <p><strong>Starts:</strong> {start}</p>
                    <p><strong>Ends:</strong> {end}</p>
                    {job.caregiver ? <p>Caregiver: <strong>{job.caregiver.name}</strong></p> : "POSITION OPEN"}
                    <p>${job.salary} {job.salary_type}</p>
                    {user.status === "caregiver" ? <button className="button is-info" onClick={handleInterestButtonClick}>{interestButtonText}</button> : null}
                </div>

            )
        } else {
            return (
                <div className="job box">
                    <div className="column">

                    </div>
                    <h3>{job.title}</h3>
                    <h3>{job.category}</h3>
                    <div className="columns">
                        <div className="column">
                            <p><strong>Starts:</strong> {start}</p>
                        </div>
                        <div className="column">
                            <p><strong>Ends:</strong> {end}</p>
                        </div>
                    </div>
                    <p>${job.salary} {job.salary_type}</p>
                    {job.caregiver ? <p>Caregiver: <strong>{job.caregiver.name}</strong></p> : <p><strong>POSITION OPEN</strong></p>}
                    <br></br>
                    <button className="button is-light is-info is-outlined">Edit Job</button>
                    <button className="button is-light is-danger is-outlined" onClick={handleDeleteButtonClick}>Delete Job</button>
                    {jobDeleted ? <p className="red-message">Deleting...</p> : null}
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