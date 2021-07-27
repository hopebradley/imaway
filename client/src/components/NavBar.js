import React from 'react';
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setUser, user, userType }) => {

  function handleLogoutClick() {
    console.log("Logging Out")
    fetch("/logout", { method: "DELETE" }).then((r) => {
      console.log(r)
      if (r.ok) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  }

  function displayNavBar() {
    if (user.status === "caregiver") {
      return (
        <div className="navbar caregiver-nav">
          <NavLink className="nav-item main-nav" activeClassName="active-item" to="/"exact>ImAway</NavLink>
          <NavLink className="nav-item" activeClassName="active-item" to="/jobs">Look For Jobs</NavLink>
          {/* <NavLink className="nav-item" activeClassName="active-item" to="/alerts">Alerts</NavLink> */}
          <NavLink className="nav-item" activeClassName="active-item" to="/profile">Profile</NavLink>
          <div className="logout-question">
            <p>{user.name} - {user.status}</p>
            <Link to="/"><button onClick={handleLogoutClick}>logout</button></Link>
          </div>
        </div>

      )
      
    } else {
      return (
        <div className="navbar caregiver-nav">
          <NavLink className="nav-item main-nav" activeClassName="active-item" to="/"exact>ImAway</NavLink>
          <NavLink className="nav-item" activeClassName="active-item" to="/jobs">My Jobs</NavLink>
          {/* <NavLink className="nav-item" activeClassName="active-item" to="/alerts">Alerts</NavLink> */}
          <NavLink className="nav-item" activeClassName="active-item" to="/profile">Profile</NavLink>
          <div className="logout-question">
            <p>{user.name} - {user.status}</p>
            <Link to="/"><button onClick={handleLogoutClick}>logout</button></Link>
          </div>
        </div>
      )

    }
  }

  return (
    <div>
      {displayNavBar()}
    </div>

  );
}
export default NavBar;