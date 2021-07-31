import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import MyProfile from './pages/MyProfile';
import OtherCaregiver from './pages/OtherCaregiver';
import OtherEmployer from './pages/OtherEmployer';
import JobPage from './pages/JobPage';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ jobs, setJobs ] = useState([]);
  const [ allCaregivers, setAllCaregivers ] = useState([]);
  const [ allEmployers, setAllEmployers ] = useState([]);

  const loadUser = () => {
    fetch('/employer')
    .then(resp => {
      if (resp.ok) {
        resp.json().then(data => {
          setLoggedIn(true);
          setUser(data);
        }); 
      } else {
        fetch('/caregiver')
        .then(resp => {
          if (resp.ok) {
            resp.json().then(data => {
              setLoggedIn(true);
              setUser(data);
            });
          }
        });
      } 
    });
  }
  const loadJobs = () => {
    fetch('/jobs')
    .then(resp => resp.json())
    .then(data => {
        setJobs(data);
    });
  }
  const loadCaregivers = () => {
    fetch('/caregivers')
    .then(resp => resp.json())
    .then(data => setAllCaregivers(data));
  }
  const loadEmployers = () => {
    fetch('/employers')
    .then(resp => resp.json())
    .then(data => setAllEmployers(data));
  }
  const loadData = () => {
    loadUser();
    loadJobs();
    loadCaregivers();
    loadEmployers();
  }

  useEffect(() => {
    loadData();
  }, []);


  if (!loggedIn) return <LoginPage setUser={setUser} setLoggedIn={setLoggedIn}/>;

  return (
    <Router>
      <div>
        <NavBar loggedIn={loggedIn} setUser={setUser} user={user}/>

        
        <Route exact path="/" render={() => <HomePage user={user}  />}/>
        <Route exact path="/jobs" render={() => <JobPage jobs={jobs} user={user} loadData={loadData} />}/>
        <Route exact path="/profile" render={() => <MyProfile user={user} jobs={jobs} loadData={loadData}/>}/>

        {/* routes for viewing others' profiles */}
        <Route exact path="/caregivers/:user_id" render={(routerProps) => <OtherCaregiver params={routerProps.match.params} loadData={loadData} caregivers={allCaregivers}/>}/>
        <Route exact path="/employers/:user_id" render={(routerProps) => <OtherEmployer params={routerProps.match.params} loadData={loadData} employers={allEmployers}/>}/>
      </div>
    </Router>
  );

}

export default App;
