import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setUser, user }) => {

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

  return (
    <div className="navbar">
      <NavLink className="nav-item" activeClassName="active-item" id="main-nav" to="/"exact>ImAway</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/community">Calendar</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/new-workout">Contacts</NavLink>
      <NavLink className="nav-item" activeClassName="active-item" to="/profile">Profile</NavLink>
      <div className="logout">
        <p>not {user.name}?</p>
        <Link to="/"><button onClick={handleLogoutClick}>logout</button></Link>
      </div>
    </div>

  );
}
export default NavBar;