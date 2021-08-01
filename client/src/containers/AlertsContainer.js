import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';

const AlertsContainer = ( { job, user, loadData }) => {

    const [ alerts, setAlerts ] = useState([]);

    useEffect(() => {
        if (job) {
            setAlerts(job.alerts);
        } else {
            fetch('/alerts')
            .then(resp => resp.json())
            .then(data => {
                let usersAlerts = [];
                if (user.status === "employer") {
                    usersAlerts = data.filter(a => a.job.employer_id == user.id)
                } else {
                    usersAlerts = data.filter(a => a.job.potential_caregiver.id == user.id)
                }
                setAlerts(usersAlerts);
            });
        }
    }, [alerts])

    function displayAlerts() {
        // const myAlerts = alerts.select(a => a.employer.id === user.id);
        // console.log(myAlerts);
        return alerts.map(a => <Alert key={a.id} alert={a} loadData={loadData}/>)
    }

    return (
        <div className="alerts-page">
            {!job ? <h1>Alerts</h1> : null}
            {user.status === "employer" ? displayAlerts() : <p>You don't have any alerts.</p> }
        </div>
        )
}
export default AlertsContainer;