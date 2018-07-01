import React, {Component} from 'react';
import {Message} from '../requests/messages';
import {Link} from 'react-router-dom';
import {PostChatMessage} from './PostChatMessage';

class ChatBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loadings: true,
      messages: []
    }
  }

  componentDidMount () {
    Message
      .get_by_chat(this.props.chatId)
      .then(messages => {
        this.setState({
          messages,
          loading: false
        })
      });
    this.intervalId = setInterval (
      () => {
        Message
          .save_by_chat(this.props.chatId);
        Message
          .get_by_chat(this.props.chatId)
          .then(messages => {
            this.setState({
              messages
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
    const {loading} = this.state;
    const {messages} = this.state;
    console.log(messages);
    // console.log(this.props);

    if (loading) {
      return (
        <div className="ChatBox">
          <h5 className="loading">Loading chat box...</h5>
        </div>
      );
    }

    return (
      <div className="ChatBox">
        <h3>Chat&nbsp;
          <span style={{
            backgroundColor: '#000000', color: '#ffffff',
            fontSize: '0.5em', verticalAlign: 'text-top',
            padding: '0.125em 0.5em'
          }}>
            LIVE
          </span>
        </h3>
        <PostChatMessage id={this.props.chatId} />
        <div style={{
          backgroundColor: '#fafafa',
          width: '100%', height: '400px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: '0', right: '0',
            bottom: '0', left: '0', zIndex: '3',
            width: '100%', height: '100%', pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 80%, #fafafa)'
          }}>
            &nbsp;
          </div>
          <div style={{
            position: 'absolute', top: '0', right: '0',
            bottom: '0', left: '0', zIndex: '2',
            width: '100%', height: '100%', overflowY: 'scroll'
          }}>
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
                    chat&nbsp;id:
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
        <div style={{
          backgroundColor: '#fafafa', width: '100%', height: '40px'
        }}>&nbsp;</div>
      </div>
    )
  }
}

export {ChatBox};
