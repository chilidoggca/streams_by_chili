import React, {Component} from 'react';
import {Iframe} from '../Iframe';
import {ChatBox} from '../ChatBox';
import {Stream} from '../../requests/streams';
// import {Message} from '../../requests/messages';

class StreamShowPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stream: {}
    };

  }

  componentDidMount () {
    const {params} = this.props.match;
    const {videoId} = params;
    Stream
      .get(videoId)
      .then(stream => {
        this.setState({
          stream,
          loading: false
        });
      });
  }

  render () {
    const {stream, loading} = this.state;
    // console.log(stream);

    if (loading) {
      return (
        <main
          className="StreamLoadingPage"
          style={{padding:  '60px 20px 20px'}}
        >
          <h3>Loading stream show page...</h3>
        </main>
      )
    }

    return (
      <main
        className="StreamShowPage"
        style={{padding:  '60px 20px 20px'}}
      >
        <h2>Video</h2>
        <Iframe videoId={stream.id} />
        <ChatBox chatId={stream.liveStreamingDetails.activeLiveChatId} />
      </main>
    );
  }
}

export {StreamShowPage};
