import React from 'react'
import Team_Hero_logo from '../Image/Team_Hero_logo.png'
import './Header.css'

function Header() {
    return (
        <div>   
          {/* Navbar using bootstrap */}
          <nav className  ="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand logo" href="./home">
                <img src={Team_Hero_logo} className={"float-start"}alt=""/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                  <a className="nav-link active text-white" href="./home">Home</a>
                  <a className="nav-link text-white" href="./players">Players</a>
                  <a className="nav-link text-white" href="./team">Team</a>
                  <a className="nav-link text-white" href="./contact">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header
