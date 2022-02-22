import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setLoggedIn, setUser, user }) => {

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
      <nav className="navbar is-info is-spaced has-background-link-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item main-nav has-text-link" to="/">
            <h1 className="big-headline"><strong>ImAway</strong></h1>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item small-nav has-text-info" to="/jobs">
              {jobLinkName}
            </Link>
            <Link className="navbar-item small-nav has-text-info" to="/profile">
              My Profile
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="logout-question">
                    <p>Not {user.name}?</p>
                </div>
                <button className="button is-danger is-light is-outlined" onClick={handleLogoutClick}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;