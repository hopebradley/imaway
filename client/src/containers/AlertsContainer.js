import React from 'react';
import Alert from '../components/Alert';

const AlertsContainer = ( { alerts, job, user, loadData }) => {


    function displayAlerts() { 
        if (!job) {
            const usersAlerts = alerts.filter(a => a.receiver_id == user.id && a.recipient_type == user.status.toUpperCase());
            if (usersAlerts.length > 0) {
                return usersAlerts.map(a => <Alert key={a.id} alert={a} loadData={loadData}/>);
            } else {
                return <p className="box">Inbox empty!</p>
            }
        } else {
            return job.alerts.filter(a => a.receiver_id == user.id).map(a => <Alert key={a.id} alert={a} loadData={loadData}/>);
        }
        
    }

    return (
        <div className="alerts-page">
            {!job ? <h1 className="title-text">Alerts:</h1> : null}
            {displayAlerts()}
        </div>
        )
}
export default AlertsContainer;