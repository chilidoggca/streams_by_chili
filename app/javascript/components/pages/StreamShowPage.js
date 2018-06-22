import React, {Component} from 'react';
import {Iframe} from '../Iframe';
// import {StreamDetails} from '../StreamDetails';
// import {BidList} from '../BidList';
// import {BidForm} from '../BidForm';
// import {Bid} from '../../requests/bids';
// import {Stream} from '../../requests/streams';

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
    // Stream
    //   .get(params.videoId)
    //   .then(stream => {
    //     this.setState({
    //       stream,
    //       loading: false
    //     })
    //   });
    this.setState({
      stream: params,
      loading: false
    })
  }

  render () {
    const {stream, loading} = this.state;
    const {videoId = ''} = stream;
    // const {thumbnail = ''} = stream;

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
        <Iframe videoId={videoId} />
        {/* <img src="`${thumbnail}`" /> */}
      </main>
    );
  }
}

export {StreamShowPage};
