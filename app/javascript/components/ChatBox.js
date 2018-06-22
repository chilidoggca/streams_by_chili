import React, {Component} from 'react';
import {Message} from '../requests/messages';
import {Link} from 'react-router-dom';

class ChatBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loadings: true,
      messages: []
    }
  }

  componentDidMount () {
    this.intervalId = setInterval (
      () => {
        Message
          .save_by_chat(this.props.chatId);
        Message
          .get_by_chat(this.props.chatId)
          .then(messages => {
            this.setState({
              messages,
              loading: false
            })
          });
      },
      5000
    );
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render () {
    const {messages} = this.state
    console.log(messages);
    return (
      <div className="ChatBox">
        <h3>ChatBox</h3>
        <div style={{padding: '20px', backgroundColor: '#fafafa'}}>
        {
          messages.map(message => (
            <div key={message.id}
              className="messageItemDiv"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '5px 20px',
                margin: '20px'
              }}>
              <div>
                <Link to={`/messages/author/${message.author_name}`}>
                  <strong style={{fontSize: '10px', lineHeight: '1em'}}>
                    {message.author_name}
                  </strong>
                </Link>
              </div>
              <div>
                {message.displayMessage}
              </div>
              <div style={{fontSize: '10px', lineHeight: '1em', color: '#cccccc', textAlign: 'right'}}>
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
      </div>
    )
  }
}

export {ChatBox};
