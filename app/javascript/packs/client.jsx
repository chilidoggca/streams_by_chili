import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('container')
  document.body.append(rootDiv);
  ReactDOM.render(
    <App />,
    rootDiv
  )
});
