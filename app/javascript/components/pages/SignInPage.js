import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../config/config.json';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      token: ''
    }
    this.responseGoogle.bind(this);
    this.onFailure.bind(this);
  }

  responseGoogle = (response) => {
    // console.log(response);
    const user = response.profileObj.name;
    const token = response.Zi.access_token;
    this.setState({
      user,
      token
    });
    this.props.onTokenReceived(user, token);
  }

  onFailure = (error) => {
    alert(error);
  }

  render() {
    const {user, token} = this.state;
    // console.log('user: '+user);
    // console.log('token: '+token);
    return (
      <div className="SignInPage">
        <div className="sign_in_bg">
          &nbsp;
        </div>
        <div className="sign_in_box">
          <img src="streamsbychili.png" className="sign_in_logo" />
          <GoogleLogin
            clientId={config.GOOGLE_FRONTEND_ID}
            onSuccess={this.responseGoogle}
            onFailure={this.onFailure}
            className="google_oauth2"
            style={{border: '0'}}
          >
            <div className="google_svg_bg">
              <svg width="35px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
                <defs>
                  <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible"/>
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </svg>
            </div>
            Sign in with Google
          </GoogleLogin>
        </div>
      </div>
    )
  }
}

export {SignInPage};
