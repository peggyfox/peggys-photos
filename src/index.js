import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const photos = localStorage.photos ? JSON.parse(localStorage.photos) : [];

ReactDOM.render(
  <App preloadedState={{ photos }} />,
  document.getElementById('root'),
);
