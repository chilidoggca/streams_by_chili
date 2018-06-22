import React, {Component} from 'react';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true
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

    return <div>Hello There!</div>
  }
}

export default App;
