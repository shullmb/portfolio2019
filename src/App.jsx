import React, { Component } from 'react';
import logo from './img/mbshull_logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="mbshull.com" />
          <h1>Michael Shull | Full Stack Web Development</h1>
        </header>
        <main>
          <p>
            main content goes here
          </p>
        </main>
      </div>
    );
  }
}

export default App;
