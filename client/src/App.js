import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <HomePage />}/>
        <Route exact path="/profile" render={() => <Profile />}/>
      </div>
    </Router>
  );
}

export default App;
