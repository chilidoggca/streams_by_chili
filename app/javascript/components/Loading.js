import React from 'react';

function Loading (props) {
  return (
    <div className="Loading">
      <h5 className="loading">loading {props.loadingContent}...</h5>
    </div>
  );
}

export {Loading};
