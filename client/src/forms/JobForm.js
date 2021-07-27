import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

const JobForm = ( { user, loadData }) => {

  const [ creatingJob, setCreatingJob ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("Select One");
  const [ startDate, setStartDate ] = useState(new Date());
  const [ startTime, setStartTime ] = useState("");
  const [ endDate, setEndDate ] = useState(new Date());
  const [ endTime, setEndTime ] = useState("");
  const [ salary, setSalary ] = useState("");
  const [ salaryType, setSalaryType ] = useState("Select One");
  const [ jobDate, setJobDate ] = useState("")

  function handleClick() {
    setCreatingJob(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let start = startDate.toDateString();
    let end = endDate.toDateString();
    let startYear = startDate.getFullYear();
    let endYear = endDate.getFullYear();
    if (startYear === endYear) {
      start = start.slice(0, -5);
    }
    setJobDate(start+" - "+end)
    console.log(title, category, jobDate, salary, salaryType)
    fetch('/jobs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        category: category,
        date: jobDate,
        salary: salary,
        salary_type: salaryType,
        employer_id: user.id
      })
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data)
      setCreatingJob(false);
      loadData();
    })
  }

  function displayForm() {
    if (!creatingJob) {
      return <button onClick={handleClick}>Create a Job</button>
    } else {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Title</h3>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}>
            </input>
            <br></br>
            <h3>What type of care do you need?</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option disabled>Select One</option>
              <option>Children</option>
              <option>Pets</option>
              <option>Plants</option>
              <option>House</option>
              <option>Other</option>
            </select>
            <br></br>
            <h3>Start Date:</h3>
              {/* <input
                className="time"
                type="text"
                placeholder="MM/DD/YY"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}>
              </input>
              <p>Time:</p>
              <input
                className="time"
                type="text"
                placeholder="HH:MM"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}>
              </input> */}
            <DatePicker
                  selected={startDate} 
                  onChange={date => setStartDate(date)}
            />
            <br></br>
            <h3>End Date:</h3>
            {/* <input
                className="time"
                type="text"
                placeholder="MM/DD/YY"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}>
              </input>
              <p>Time:</p>
              <input
                className="time"
                type="text"
                placeholder="HH:MM"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}>
              </input> */}
            <DatePicker
                  selected={endDate} 
                  onChange={date => setEndDate(date)}
            />
            <br></br>
            <h3>Pay</h3>
            $<input 
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}>
            </input>
            <select
              value={salaryType} 
              onChange={(e) => setSalaryType(e.target.value)}>
              <option disabled>Select One</option>
              <option>Per Hour</option>
              <option>Per Day</option>
              <option>Flat Rate</option>
            </select>
            <br></br>
            <br></br>
            <input type="submit"></input>
          </form>
        </div>
      )
    }
  }


    return (
        <div className='job-form'>
            {displayForm()}
        </div>
    )
}

export default JobForm;