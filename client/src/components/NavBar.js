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

  let jobLinkName;
  user.status === "caregiver" ? jobLinkName = "Look For Jobs" : jobLinkName = "My Jobs";

  return (
    <div>
      <nav className="navbar is-info is-spaced has-background-link-light" role="navigation" aria-label="main navigation" data-target="navbarBasicExample">
        <div className="navbar-brand">
          <a className="navbar-item main-nav has-text-link" href="/">
            <h1><strong>ImAway</strong></h1>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item small-nav has-text-info" href="/jobs">
              {jobLinkName}
            </a>

            <a className="navbar-item small-nav has-text-info" href="/profile">
              My Profile
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="logout-question">
                    <p>Not {user.name}?</p>
                </div>
                <a className="button is-danger" onClick={handleLogoutClick}>
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>

  );
}
export default NavBar;