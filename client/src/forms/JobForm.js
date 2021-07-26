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
  const [ salary, setSalary ] = useState("");
  const [ salaryType, setSalaryType ] = useState("");

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
            Title
            <input type="text"></input>
            What type of care do you need?
            <select>
              <option>Children</option>
              <option>Pets</option>
              <option>Plants</option>
              <option>House</option>
              <option>Other</option>
            </select>
            Start Date
            <DatePicker
                  selected={startDate} 
                  onChange={date => startDate(date)}
            />
            End Date
            <DatePicker
                  selected={endDate} 
                  onChange={date => endDate(date)}
            />
            Pay
            $<input type="text"></input>
            <select>
              <option></option>
              <option></option>
              <option></option>
            </select>
            <input type="submit"></input>
          </form>
        </div>
      )
    }
  }


    return (
        <div>
            {displayForm()}
        </div>
    )
}

export default JobForm;