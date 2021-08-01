import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';

const AlertsContainer = ( { alerts, job, user, loadData }) => {


    function displayAlerts() { 
        if (!job) {
            const usersAlerts = alerts.filter(a => a.receiver_id == user.id);
            console.log(usersAlerts);
            return usersAlerts.map(a => <Alert key={a.id} alert={a} loadData={loadData}/>);
        } else {
            return job.alerts.map(a => <Alert key={a.id} alert={a} loadData={loadData}/>);
        }
        
    }

    return (
        <div className="alerts-page">
            {!job ? <h1>Alerts</h1> : null}
            {displayAlerts()}
        </div>
        )
}
export default AlertsContainer;