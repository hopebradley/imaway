import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import ProfilePage from './pages/ProfilePage';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userType, setUserType ] = useState("");
  const [ user, setUser ] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  // CHECKS WHETHER A EMPLOYER, CAREGIVER, OR NOBODY IS LOGGED IN
  const loadUser = () => {
    fetch('/employer')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(user => {
          setUser(user);
          setUserType("employer");
          setLoggedIn(true);
        });
      }
      else {
        fetch('/caregiver')
        .then(resp => {
          if (resp.ok) {
            resp.json().then(user => {
              setUser(user);
              setUserType("employer");
              setLoggedIn(true);
            });
          }
          else {
            console.log("No one is logged in")
            setLoggedIn(false);
          }
        });
      }
    });
  }

  if (!loggedIn) return <LoginPage setUser={setUser} setLoggedIn={setLoggedIn} setUserType={setUserType}/>;

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <HomePage />}/>
        <Route exact path="/profile" render={() => <ProfilePage />}/>
      </div>
    </Router>
  );

}

export default App;
