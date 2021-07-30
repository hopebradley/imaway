import React, { useState } from 'react';
import AlertsPage from '../pages/AlertsPage';

const ProfileJob = ( { job, user, loadData } ) => {

    function displayJob() {
        if (user.status === "caregiver") {
            return (
                <div className="profile-job">
                    You are scheduled for the job
                    <strong> {job.title} </strong>
                    for 
                    <strong> {job.employer.name}</strong>
                </div>
            )
        } else {
            return (
                <div className="profile-job">
                    {job.caregiver.name} 
                    <p>is scheduled for your job</p>
                    <strong>{job.title}</strong>
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

export default ProfileJob;