import React from 'react';

function SortByColumn (props) {
  // const {
  //   ascending = () => {},
  //   descending = () => {},
  // } = props;
  //
  // const handleAscendingClick = event => {
  //   event.preventDefault();
  //   ascending();
  // }
  //
  // const handleDescendingClick = event => {
  //   event.preventDefault();
  //   descending();
  // }

  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column'
    }}>
      <a href="#" className="sort-arrow"
        onClick={props.ascending} style={{
        lineHeight: '0.5em'
      }}>
        <i className="fas fa-sort-up" style={{
          lineHeight: '0.5em'
        }}></i>
      </a>
      <a href="#" className="sort-arrow"
        onClick={props.descending} style={{
        lineHeight: '0.5em'
      }}>
        <i className="fas fa-sort-down" style={{
          lineHeight: '0.5em'
        }}></i>
      </a>
    </div>
  )
}

export {SortByColumn};
