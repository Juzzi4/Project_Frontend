/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-info">
  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
    <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>
  <span className="navbar-brand mb-0 h1">Music Searcher</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/browse">Browse</a>
      </li>
      {props.isLoggedIn !== undefined ? 
        <li className="nav-item active">
        <a className="nav-link" onClick="">Log out</a>
      </li>
      :
      <li className="nav-item active">
        <a className="nav-link" href="/login">Log in</a>
      </li>
      }
      <li className="nav-item active">
        <a className="nav-link" href="/signup">Sign Up</a>
      </li>
      <li className="nav-item active">
          <a className="nav-link" href="/selection">My Saves</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://youtu.be/oHg5SJYRHA0">Click Me</a>
        </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;