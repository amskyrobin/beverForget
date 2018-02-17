import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.js';

window.onload = function() {
  ReactDOM.render(
    <Container />,
    document.getElementById('app')
    )
}