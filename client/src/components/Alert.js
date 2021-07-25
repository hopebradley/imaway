import React, { useState } from 'react';

const Alert = ( { alert }) => {


    return (
        <div className="alert">
            {alert.potential_caregiver.name + " " + alert.contents + " in your job "}
            <strong>{alert.job.title}</strong>
            <br></br>
            <button>Accept</button> <button>Reject</button>
        </div>
    )
}

export default Alert;