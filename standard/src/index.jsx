/**
 * @fileoverview App.jsx
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './components';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

render(<App />, document.getElementById('root'));
