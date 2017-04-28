/**
 * @fileoverview Home
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="logo">
            <a href="/"></a>
          </h1>
        </header>
        <div className="wrapper .clearfix">
          <main className="main">
          </main>
          <div className="sidemenu">
          </div>
        </div>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}
