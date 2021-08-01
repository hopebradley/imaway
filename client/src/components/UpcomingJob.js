import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingJob = ( { job, user, loadData } ) => {



    function displayJob() {
        if (user.status === "caregiver") {
            const linkName = "/employers/"+job.employer.id;
            return (
                <div className="box upcoming-job">
                    You are scheduled for the job
                    <h3><strong>{job.title}</strong></h3>
                    <p>for</p>
                    <div className="box profile-link">
                        <img src={job.employer.img_url} alt="profile-pic"/>
                        <Link to={linkName}><strong>{job.employer.name}</strong></Link>
                    </div>
                    <h6>{job.date.split("-")[0]}</h6>
                </div>
            )
        } else {
            const linkName = "/caregivers/"+job.caregiver.id;
            return (

                <div className="box upcoming-job">
                    <div className="box profile-link">
                        <img src={job.caregiver.img_url} alt="profile-pic"/>
                        <Link to={linkName}><strong>{job.caregiver.name}</strong></Link>
                    </div>     
                    <p>is scheduled for your job</p>
                    <br></br>
                    <h3><strong>{job.title}</strong></h3>
                    <h6>{job.date.split("-")[0]}</h6>
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

export default UpcomingJob;