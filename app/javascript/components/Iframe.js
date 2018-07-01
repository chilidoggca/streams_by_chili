import React from 'react';

function Iframe (props) {
  return (
    <div className="Iframe" style={{width: '100%', position: 'relative', paddingBottom: '56.25%', background: `${props.thumbnail}`, backgroundSize: 'cover', backgroundColor: '#999999'}}>
    {/* <div className="Iframe" style={{backgroundImage: `url(${props.thumbnail})`, backgroundSize: 'cover'}}>
      &nbsp; */}
      {/* <iframe src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
      style={{width: "480px", height: "360px"}}> */}
      <div style={{position: 'absolute', top: '0', right: '0', bottom: '0', left: '0'}}>
        <iframe src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
        style={{width: "100%", height: "100%"}}>
        </iframe>
      </div>
    </div>
  );
}

export {Iframe};
