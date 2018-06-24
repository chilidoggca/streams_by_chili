import React from 'react';

function Loading (props) {
  return (
    <div className='LoadingPage'>
      <h2>Loading {props.loadingContent}...</h2>
    </div>
  );
}

export {Loading};
