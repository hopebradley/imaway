import React from 'react';
import Alert from '../components/Alert';

const AlertsPage = ( { user, alerts }) => {

    function displayAlerts() {
        // const myAlerts = alerts.select(a => a.employer.id === user.id);
        // console.log(myAlerts);
        return alerts.map(a => <Alert alert={a}/>)
    }

    return (
        <div className="alerts-page">
            {user.status === "employer" ? displayAlerts() : null }
        </div>
        )
}
export default AlertsPage;