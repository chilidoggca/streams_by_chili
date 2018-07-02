import React, {Component} from 'react';
import {Message} from '../../requests/messages';
import {Link} from 'react-router-dom';
import {Loading} from '../Loading';
import {FilterMessages} from '../FilterMessages';

class MessageIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      messages: [],
      results: []
    };

  }

  componentDidMount () {
    Message
      .all()
      .then(messages => {
        this.setState({messages, results: messages, loading: false})
      });
  }

  updateMessages = (props) => {
    // const {messages} = this.state;
    // console.log('parent', messages);
    console.log(props);
    this.setState({ results: props });
  }

  render () {
    const {loading, messages, results} = this.state;

    if (loading) {
      return (
        <main className="MessageIndexPage">
          <Loading loadingContent="archived chat messages" />
        </main>
      )
    }

    return (
      <main className="MessageIndexPage">
        <h2>Messages Archive</h2>
        <FilterMessages messages={messages} onFilterMessages={this.updateMessages} />
        <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
          {
            results.map(message => (
              <div key={message.id}
                className="messageItemDiv"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '5px 20px',
                  margin: '20px'
                }}>
                <div className="text-truncate">
                  <Link to={`/messages/author/${message.author_name}`}>
                    <strong style={{fontSize: '12px', lineHeight: '1em'}}>
                      {message.author_name}
                    </strong>
                  </Link>
                </div>
                <div className="mb-2">
                  {message.displayMessage}
                </div>
                <div className="text-truncate" style={{fontSize: '12px', lineHeight: '1em', color: '#cccccc', textAlign: 'right'}}>
                  chat id:
                  <Link to={`/messages/chat/${message.live_chat_id}`}>
                    <strong>
                      {message.live_chat_id}
                    </strong>
                  </Link>
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
