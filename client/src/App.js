import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import ProfilePage from './pages/ProfilePage';
import CalendarPage from './pages/CalendarPage';
import AlertsPage from './pages/AlertsPage';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ jobs, setJobs ] = useState([]);
  const [ alerts, setAlerts ] = useState([]);

  useEffect(() => {
    loadUser();
    loadJobs();
    loadAlerts();
  }, []);

  // CHECKS WHO IS LOGGED IN
  const loadUser = () => {
    fetch('/employer')
    .then(resp => resp.json())
    .then(data => {
      if (!(data.hasOwnProperty('errors'))) {
        console.log("this is an employer");
        setLoggedIn(true);
        setUser(data);
      } else {
        console.log("could be a caregiver or nobody");
        fetch('/caregiver')
        .then(resp => resp.json())
        .then(data => {
          if (!(data.hasOwnProperty('errors'))) {
            console.log("this is a caregiver");
            setLoggedIn(true);
            setUser(data);
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
        console.log(data);
    });
  }

  if (!loggedIn) return <LoginPage setUser={setUser} setLoggedIn={setLoggedIn}/>;

  return (
    <Router>
      <div>
        <NavBar loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn} user={user}/>
        <Route exact path="/" render={() => <HomePage user={user}  />}/>
        <Route exact path="/calendar" render={() => <CalendarPage jobs={jobs} user={user} loadJobs={loadJobs} loadAlerts={loadAlerts}/>}/>
        <Route exact path="/alerts" render={() => <AlertsPage jobs={jobs} user={user} loadJobs={loadJobs} alerts={alerts}/>}/>
        <Route exact path="/profile" render={() => <ProfilePage user={user} jobs={jobs} />}/>
      </div>
    </Router>
  );

}

export default App;
