import React from 'react';

const Alert = ( { alert, loadData }) => {

    function handleAcceptClick() {
        fetch('/jobs/'+alert.job.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caregiver_id: alert.potential_caregiver.id
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
        fetch('/alerts/'+alert.id, {
            method: "DELETE"
        })
        .then(() => loadData())
    }


    return (
        <div className="box alert">
            {alert.potential_caregiver.name + " " + alert.contents + " in your job "}
            <strong>{alert.job.title}</strong>
            <br></br>
            <button className="button is-success is-light" onClick={handleAcceptClick}>Accept</button> <button className="button is-danger is-light" onClick={handleRejectClick}>Reject</button>
        </div>
    )
}

export default Alert;