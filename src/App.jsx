import React, { Component } from 'react';
import logo from './img/mbshull_logo.png';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <header>
          <h1>Michael Shull | Full Stack Web Development</h1>
        </header>
        <nav>
          <img src={logo} alt="mbshull.com" />
          <ul>
            <li>nav item 1</li>
            <li>nav item 2</li>
            <li>nav item 3</li>
            <li>nav item 4</li>
          </ul>
        </nav>
        <main>
          <p>
            main content goes here
          </p>
        </main>
        <footer> this is the footer</footer>
      </div>
    );
  }
}

export default App;
