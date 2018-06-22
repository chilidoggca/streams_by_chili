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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/">&nbsp;Streams by Chili&nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/live">Live Streams</Link>
          </li>
          <li className="nav-item">
            <Link style={{marginRight: '20px'}} to="/archive">Messages Archive</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export {NavBar};
