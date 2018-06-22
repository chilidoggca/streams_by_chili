import React from 'react';

function Iframe (props) {
  return (
    <div className="Iframe">
    {/* <div className="Iframe" style={{backgroundImage: `url(${props.thumbnail})`, backgroundSize: 'cover'}}>
      &nbsp; */}
      <iframe src={`https://www.youtube.com/embed/${props.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
      style={{width: "560px", height: "315px"}}>
      </iframe>
    </div>
  );
}

export {Iframe};
