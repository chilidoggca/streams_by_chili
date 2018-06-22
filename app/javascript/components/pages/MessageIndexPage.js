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
        <h2>Messages</h2>
        <div style={{paddingLeft: '10px'}}>
          {
            this.state.messages.map(message => (
              <div key={message.id} className="messageItemDiv">
                <Link to={`/messages/${message.id}`}>
                  {message.title}
                </Link>
                <Field name="Message Owner" value={message.message_owner.full_name} />
                {
                  (true) ?
                  <button
                    className="btn"
                    onClick={this.deleteMessage(message.id)}
                  >Delete</button> : ''
                }
              </div>
            ))
          }
        </div>
      </main>
    );
  }
}

export {MessageIndexPage};
