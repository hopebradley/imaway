import React from 'react';

const Alert = ( { alert, loadData }) => {

    function handleAcceptClick() {
        const thisAlert = alert;
        fetch('/jobs/'+alert.job.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                caregiver_id: thisAlert.sender.id
            })
        })
        .then(() => {
            fetch('/alerts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: "has accepted your request for ",
                    sender_id: thisAlert.receiver_id,
                    job_id: thisAlert.job.id,
                    receiver_id: thisAlert.sender_id,
                    recipient_type: 'CAREGIVER'
                })
            })
            console.log("an alert was posted")
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
            console.log("this is posting")
            fetch('/alerts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: "has rejected your request for ",
                    sender_id: thisAlert.receiver_id,
                    job_id: thisAlert.job.id,
                    receiver_id: thisAlert.sender_id,
                    recipient_type: 'CAREGIVER'
                })
            });
        });
    }

    function handleClearClick() {
        fetch('/alerts/'+alert.id, {
            method: "DELETE"
        })
        .then(() => loadData());
    }

    function displayAlert() {
        if (alert.receiver.status === "employer") {
            return (
                <div className="box alert neutral">
                    {alert.sender.name + " " + alert.contents}
                    <strong>{alert.job.title}</strong>
                    <br></br>
                    <br></br>
                    <button className="button is-success is-light" onClick={handleAcceptClick}>Accept</button> <button className="button is-danger is-light" onClick={handleRejectClick}>Reject</button>
                </div>
            )
        } else {
            let alertClass = "";
            alert.contents === "has rejected your request for " ? alertClass = "box alert bad" : alertClass = "box alert good";
            return (
                <div className={alertClass}>
                    {alert.sender.name + " " + alert.contents}
                    <strong>{alert.job.title}</strong>
                    <br></br>
                    <br></br>
                    <button className="button is-info is-light" onClick={handleClearClick}>Clear</button>
                </div>
            )
        }
    }


    return (
        <div>
            {displayAlert()}
        </div>
    )
}

export default Alert;
