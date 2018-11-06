import React, { Component } from 'react';

import './app.css';
import MainPage from '../pages/main-page';
import LoginPage from '../pages/login-page';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    );
  }
};
