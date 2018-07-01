import React, {Component} from 'react';
import {Message} from '../requests/messages';

class PostChatMessage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  submit (message) {
    Message
      .post_to_chat(this.props.chatId, message, token)
  }

  render () {

    return (
      <div
        className="PostChatMessage"
        style={{padding: '40px 20px 2px 20px', backgroundColor: '#fafafa'}}
      >
        <form className="PostMessageForm">
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <div className="group" style={{flexGrow: '1'}}>
              <input type="text" required />
              <span className="bar"></span>
              <label>Your message...</label>
            </div>
            <div style={{width: '105px', flexGrow: '0', textAlign: 'right'}}>
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export {PostChatMessage};
