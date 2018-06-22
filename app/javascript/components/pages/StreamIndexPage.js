import React, {Component} from 'react';
import {Stream} from '../../requests/streams';
import {Link} from 'react-router-dom';

class StreamIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      streams: []
    };

  }

  componentDidMount () {
    Stream
      .all()
      .then(streams => {
        this.setState({streams, loading: false})
      });
  }

  render () {
    const {loading} = this.state;
    const {streams} = this.state;

    if (loading) {
      return (
        <main
          className="StreamIndexPage"
          style={{padding:  '60px 20px 20px'}}
        >
          <h3>Loading streams...</h3>
        </main>
      )
    }

    return (
      <main
        className="StreamIndexPage"
        style={{padding:  '60px 20px 20px'}}
      >
        <h2>Streams</h2>
        <div className="streamListDiv">
          {
            this.state.streams.map(stream => (
              <div key={stream.id.videoId} className="streamItemDiv row">
                <div className="col-sm-6 col-md-3" style={{padding: '10px'}}>
                  <Link to={`/streams/${stream.id.videoId}`}>
                    <img src={stream.snippet.thumbnails.high.url} style={{
                      display: 'block',
                      maxWidth: '320px',
                      maxHeight: '180px',
                      width: '100%',
                      height: 'auto'
                    }} />
                  </Link>
                </div>
                <div className="col-sm-6 col-md-9" style={{padding: '10px'}}>
                  {/* <a href={`https://www.youtube.com/watch?v=${stream.id.videoId}`} target="_blank"> */}
                  <Link to={`/streams/${stream.id.videoId}`}>
                    <h4>{stream.snippet.title}</h4>
                  </Link>
                  {/* </a> */}
                  <p>by {stream.snippet.channelTitle}</p>
                  <p>{stream.snippet.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    );
  }
}

export {StreamIndexPage};
