import React, {Component} from 'react';
import {
  NotFoundPage,
  HomePage,
  StreamIndexPage,
  StreamShowPage,
  MessageIndexPage,
  MessageAuthorShowPage,
  MessageChatShowPage,
} from './pages';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false
    };
  }



  render() {
    const {loading} = this.state;

    if (loading) {
      return (
        <div>
          Loading...
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
