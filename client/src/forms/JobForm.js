import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

const JobForm = () => {

  const [ creatingJob, setCreatingJob ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("Select One");
  const [ startDate, setStartDate ] = useState("");
  const [ startMonth, setStartMonth ] = useState("");
  const [ startYear, setStartYear ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endDate, setEndDate ] = useState("");
  const [ endMonth, setEndMonth ] = useState("");
  const [ endYear, setEndYear ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ salary, setSalary ] = useState("");
  const [ salaryType, setSalaryType ] = useState("Select One");

  function handleClick() {
    setCreatingJob(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let date = "";
    let start = startMonth+" / "+startDate+" / "+startYear
    let end = endMonth+" / "+endDate+" / "+endYear
    if ( start === end ) {
      date = start + " from " + startTime+" to "+endTime
    } else {
      date = start + " at "+startTime+" to "+end+" at "+endTime
    }
    console.log(title, category, date, salary, salaryType)
    setCreatingJob(false);
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
            <h3>Start Date</h3>
              <input
                className="date-month"
                type="text"
                placeholder="DD"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}>
              </input>/
              <input
                className="date-month"
                type="text"
                placeholder="MM"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}>
              </input>/
              <input
                className="year"
                type="text"
                placeholder="YYYY"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}>
              </input> -
              <input
                className="time"
                type="text"
                placeholder="HH:MM (AM/PM)"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}>
              </input>
            {/* <DatePicker
                  selected={startDate} 
                  onChange={date => startDate(date)}
            /> */}
            <br></br>
            <h3>End Date</h3>
            <input
                className="date-month"
                type="text"
                placeholder="DD"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}>
              </input>/
              <input
                className="date-month"
                type="text"
                placeholder="MM"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}>
              </input>/
              <input
                className="year"
                type="text"
                placeholder="YYYY"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}>
              </input> -  
              <input
                className="time"
                type="text"
                placeholder="HH:MM (AM/PM)"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}>
              </input>
            {/* <DatePicker
                  selected={endDate} 
                  onChange={date => endDate(date)}
            /> */}
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