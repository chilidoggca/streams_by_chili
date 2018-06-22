import React, {Component} from 'react';
import {Message} from '../../requests/messages';
import {Link} from 'react-router-dom';

class MessageIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      messages: []
    };

  }

  componentDidMount () {
    Message
      .all()
      .then(messages => {
        this.setState({messages, loading: false})
      });
  }

  render () {
    const {loading} = this.state;
    const {messages} = this.state;

    if (loading) {
      return (
        <main
          className="MessageIndexPage"
          style={{padding: '60px 20px 20px'}}
        >
          <h3>Loading messages...</h3>
        </main>
      )
    }

    return (
      <main
        className="MessageIndexPage"
        style={{padding: '60px 20px 20px'}}
      >
        <h2>All Messages</h2>
        <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
          {
            this.state.messages.map(message => (
              <div key={message.id}
                className="messageItemDiv"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '5px 20px',
                  margin: '20px'
                }}>
                <div>
                  <Link to={`/messages/${message.author_name}`}>
                    <strong style={{fontSize: '10px', lineHeight: '1em'}}>
                      {message.author_name}
                    </strong>
                  </Link>
                </div>
                <div>
                  {message.displayMessage}
                </div>
              </div>
            ))
          }
        </div>
      </main>
    );
  }
}

export {MessageIndexPage};
