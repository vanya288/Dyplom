import React, { Component } from 'react';

import './app.css';
import MainPage from '../pages/main-page';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    );
  }
};
