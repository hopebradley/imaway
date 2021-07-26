import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

const JobForm = () => {

  const [ creatingJob, setCreatingJob ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  // const [ salary, setSalary ] = useState("");
  // const [ salaryType, setSalaryType ] = useState("");

  function handleClick() {
    setCreatingJob(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(title, category, start, end, salary, salary_type, employer_id)
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
            <input type="text"></input>
            <br></br>
            <h3>What type of care do you need?</h3>
            <select>
              <option>Children</option>
              <option>Pets</option>
              <option>Plants</option>
              <option>House</option>
              <option>Other</option>
            </select>
            <br></br>
            <h3>Start Date</h3>
            <DatePicker
                  selected={startDate} 
                  onChange={date => startDate(date)}
            />
            <br></br>
            <h3>End Date</h3>
            <DatePicker
                  selected={endDate} 
                  onChange={date => endDate(date)}
            />
            <br></br>
            <h3>Pay</h3>
            $<input type="text"></input> 
            <select>
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