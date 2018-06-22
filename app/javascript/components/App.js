import React, {Component} from 'react';
import {
  NotFoundPage,
  HomePage,
  StreamIndexPage,
  MessageIndexPage
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
            <Route path="/messages" exact component={MessageIndexPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
