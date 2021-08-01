import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';

const AlertsContainer = ( { alerts, job, user, loadData }) => {

    function displayAlerts() {
        console.log(alerts);
        let theseAlerts = [];
        if (job) {
            theseAlerts = job.alerts;
        } else if (user.status === "employer") {
            theseAlerts = alerts.filter(a => a.job.employer_id == user.id);
        }
        console.log(theseAlerts)
        return theseAlerts.map(a => <Alert key={a.id} alert={a} loadData={loadData}/>);
    }

    return (
        <div className="alerts-page">
            {!job ? <h1>Alerts</h1> : null}
            {alerts ? displayAlerts() : <p>You don't have any alerts.</p> }
        </div>
        )
}
export default AlertsContainer;