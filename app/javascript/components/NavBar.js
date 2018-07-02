import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.tippy(window.document.querySelector('.user-icon'),
      {placement: 'bottom'}
    );
  }

  render() {
    const {user} = this.props;
    return (
      <nav
        className="navbar fixed-top navbar-expand-md navbar-dark bg-dark"
        style={{padding: 0}}
      >
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="streamsbychili.png" style={{height: '45px'}} /></Link>
          <button className="navbar-toggler collapsed" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" style={{color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.5)'}}
          >
            {' '}
          </button>
          <div className="collapse navbar-collapse bg-dark"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/streams">Live Streams</Link>
              </li>
              <li className="nav-item">
                <Link to="/messages">Chat Messages</Link>
              </li>
            </ul>
          </div>
          {
            (user) ?
            <div className="user-icon-div d-none d-md-block" style={{
              marginLeft: '50px', color: '#ffffff',
              fontSize: '12px', lineHeight: '35px'
            }}>
              <a href="#"
                onClick={(e) => {e.preventDefault}}
                title={'Hello, '+user} className="user-icon"
                style={{
                  fontSize: '28px', color: 'rgba(255,255,255,0.5)',
                  verticalAlign: 'middle', cursor: 'default'
                }}>
                <i className="fas fa-user-circle"></i>
              </a>
            </div> : null
          }
        </div>
      </nav>
    );
  }
}

export {NavBar};
