import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <>
        Hello World!
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);