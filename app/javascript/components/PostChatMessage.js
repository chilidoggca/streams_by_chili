import React, {Component} from 'react';
import {Message} from '../requests/messages';

class PostChatMessage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleChange (name) {
    return event => {
      const {currentTarget} = event;
      this.setState({
        [name]: currentTarget.value
      });
    }
  }

  postMessage = (event) => {
    event.preventDefault();
    const {message} = this.state;
    console.log([this.props.chatId, message, this.props.token]);
    Message
      .post_to_chat(this.props.chatId, message, this.props.token)
      .then(
        (res) => {
          console.log(res);
          this.setState({ message: '' });
        }
      );
  }

  render () {
    const {message} = this.state;
    return (
      <div
        className="PostChatMessage"
        style={{padding: '40px 20px 2px 20px', backgroundColor: '#fafafa'}}
      >
        <form className="PostMessageForm" onSubmit={this.postMessage}>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <div className="group" style={{flexGrow: '1'}}>
              <input
                type="text"
                name="message"
                id="message"
                value={message}
                onChange={this.handleChange('message')}
                required />
              <span className="bar"></span>
              <label htmlFor="message">Your message...</label>
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
