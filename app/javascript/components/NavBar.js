import React from 'react';
import {Link} from 'react-router-dom';

function NavBar (props) {
  return (
    <nav
      className="navbar fixed-top navbar-expand-md navbar-dark bg-dark"
      style={{
        padding: '10px',
        display: 'flex',
        height: '55px'
      }}
    >
      <Link className="navbar-brand" to="/"><img src="streamsbychili.png" style={{height: '45px'}} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/streams">Live Streams</Link>
          </li>
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/messages">Chat Messages</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export {NavBar};
