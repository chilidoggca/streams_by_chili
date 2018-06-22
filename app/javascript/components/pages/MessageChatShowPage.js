import React, {Component} from 'react';
import {Message} from '../../requests/messages';
import {Link} from 'react-router-dom';

class MessageChatShowPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      chatId: '',
      messages: []
    };

  }

  componentDidMount () {
    const {params} = this.props.match;
    Message
      .get_by_chat(params.chatId)
      .then(messages => {
        this.setState({
          messages,
          chatId: params.chatId,
          loading: false
        })
      });
  }

  render () {
    const {messages, chatId, loading} = this.state;

    if (loading) {
      return (
        <main
          className="MessageLoadingPage"
          style={{padding:  '60px 20px 20px'}}
        >
          <h3>Loading messages show page by chat...</h3>
        </main>
      )
    }

    return (
      <main
        className="MessageChatShowPage"
        style={{padding:  '60px 20px 20px'}}
      >
        <h2>Messages in Chat {chatId}</h2>
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
      </main>
    );
  }
}

export {MessageChatShowPage};
