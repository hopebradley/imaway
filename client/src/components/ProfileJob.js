import React from 'react';
import { Link } from 'react-router-dom';

const ProfileJob = ( { job, user, loadData } ) => {



    function displayJob() {
        if (user.status === "caregiver") {
            const linkName = "/employers/"+job.employer.id;
            return (
                <div className="box profile-job">
                    You are scheduled for the job
                    <h3>{job.title}</h3>
                    for 
                    <Link to={linkName}><strong> {job.employer.name}</strong></Link>
                </div>
            )
        } else {
            const linkName = "/caregivers/"+job.caregiver.id;
            return (

                <div className="box profile-job">
                    <Link to={linkName}><strong>{job.caregiver.name}</strong></Link>
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