import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar'
import ProfilePage from './pages/ProfilePage';

function App() {
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
