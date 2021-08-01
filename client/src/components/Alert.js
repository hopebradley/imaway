import React from 'react';

const Alert = ( { alert, loadData }) => {

    function handleAcceptClick() {
        fetch('/jobs/'+alert.job.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caregiver_id: alert.sender.id
            })
        })
        .then(() => {
            fetch('/alerts/'+alert.id, {
                method: "DELETE"
            })
            .then(() => loadData());
        });
    }

    function handleRejectClick() {
        const thisAlert = alert;
        fetch('/alerts/'+alert.id, {
            method: "DELETE"
        })
        .then(() => loadData())
        .then(() => {
            fetch('/alerts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: "has rejected your request for the job ",
                    sender_id: thisAlert.job.employer.id,
                    job_id: thisAlert.job.id
                })
            })
        })
    }


    return (
        <div className="box alert">
            <span class="icon">
                <i class="fas fa-bell is-info is-large"></i>
            </span>
            {alert.sender.name + " " + alert.contents}
            <strong>{alert.job.title}</strong>
            <br></br>
            <button className="button is-success is-light" onClick={handleAcceptClick}>Accept</button> <button className="button is-danger is-light" onClick={handleRejectClick}>Reject</button>
        </div>
    )
}

export default Alert;