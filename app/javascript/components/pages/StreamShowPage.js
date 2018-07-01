import React, {Component} from 'react';
import {Iframe} from '../Iframe';
import {ChatBox} from '../ChatBox';
import {Loading} from '../Loading';
import {Stream} from '../../requests/streams';

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
        <main className="StreamShowPage">
          <Loading loadingContent="stream show page" />
        </main>
      )
    }

    return (
      <main className="StreamShowPage">
        <h2>
          Stream
          <span style={{
            backgroundColor: '#000000', color: '#ffffff',
            fontSize: '0.5em', verticalAlign: 'text-top',
            padding: '0.125em 0.5em', textTransform: 'uppercase'
          }}>
            live
          </span>
        </h2>
        <div style={{
          width: '100%', display: 'flex', flexWrap: 'wrap',
          flexDirection: 'row', justifyContent: 'flex-start'
        }}>
          <div style={{width: '480px', minWidth: '290px', flexGrow: '1', margin: '0 20px 20px 0'}}>
            <Iframe videoId={stream.id} thumbnail={stream.snippet.thumbnails.high.url} />
          </div>
          <div style={{width: '290px', flexGrow: '1', margin: '0 20px 20px 0'}}>
            <ChatBox chatId={stream.liveStreamingDetails.activeLiveChatId} />
          </div>
        </div>
      </main>
    );
  }
}

export {StreamShowPage};
