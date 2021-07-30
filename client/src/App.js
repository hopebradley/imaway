import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import MyProfile from './pages/MyProfile';
import OtherCaregiver from './pages/OtherCaregiver';
import CalendarPage from './pages/CalendarPage';
import AlertsPage from './pages/AlertsPage';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ jobs, setJobs ] = useState([]);
  const [ alerts, setAlerts ] = useState([]);
  const [ allCaregivers, setAllCaregivers ] = useState([]);
  const [ allEmployers, setAllEmployers ] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    loadUser();
    loadJobs();
    loadAlerts();
    loadCaregivers();
    loadEmployers();
  }
  // ABOVE FUNCTION COMBINES ALL THE BELOW THREE
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
  const loadAlerts = () => {
    fetch('/alerts')
    .then(resp => resp.json())
    .then(data => {
        setAlerts(data);
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

  if (!loggedIn) return <LoginPage setUser={setUser} setLoggedIn={setLoggedIn}/>;

  return (
    <Router>
      <div>
        <NavBar loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn} user={user}/>
        <Route exact path="/" render={() => <HomePage user={user}  />}/>
        <Route exact path="/jobs" render={() => <CalendarPage jobs={jobs} user={user} loadData={loadData} />}/>
        <Route exact path="/alerts" render={() => <AlertsPage jobs={jobs} user={user} loadData={loadData} alerts={alerts}/>}/>
        <Route exact path="/profile" render={() => <MyProfile user={user} jobs={jobs} loadData={loadData}/>}/>
        <Route exact path="/caregivers/:user_id" render={(routerProps) => <OtherCaregiver params={routerProps.match.params} loadData={loadData} caregivers={allCaregivers}/>}/>
      </div>
    </Router>
  );

}

export default App;
