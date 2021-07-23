import React, { useState, useEffect } from 'react';
import Job from '../components/Job';

const CalendarPage = () => {

    const [ jobs, setJobs ] = useState([]);

    useEffect(() => {
        getJobs();
      }, []);

    function getJobs() {
        fetch('/jobs')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setJobs(data);
        });
    }

    

    return (
        <div>
            {jobs.map(job => <Job job={job}/>)}
        </div>
    )
}

export default CalendarPage;