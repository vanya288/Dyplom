import React, { Component } from 'react';

import './app.css';
import LoginPage from '../pages/login-page';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <LoginPage />
      </div>
    );
  }
};
