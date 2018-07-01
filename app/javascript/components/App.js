import React, {Component} from 'react';
import {
  NotFoundPage,
  HomePage,
  StreamIndexPage,
  StreamShowPage,
  MessageIndexPage,
  MessageAuthorShowPage,
  MessageChatShowPage,
  SignInPage
} from './pages';
import {NavBar} from './NavBar';
import {Loading} from './Loading';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      user: "",
      token: "",
      signedIn: false
    };
  }



  render() {
    const {loading, user, token, signedIn} = this.state;

    if (loading) {
      return (
        <div className="App">
          <Loading loadingContent="app" />
        </div>
      );
    }

    if (!signedIn || !user) {
      return (
        <div className="App">
          <SignInPage />
        </div>
      );
    }

    return (
      <Router basename="/">
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/streams" exact component={StreamIndexPage} />
            <Route path="/streams/:videoId" component={StreamShowPage} />
            <Route path="/messages" exact component={MessageIndexPage} />
            <Route path="/messages/author/:authorName" exact component={MessageAuthorShowPage} />
            <Route path="/messages/chat/:chatId" exact component={MessageChatShowPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
