import React, { Component } from 'react';
import logo from './img/mbshull_logo.png';
import ProjectContainer from './components/ProjectContainer';

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
          {/* <p>
            main content goes here
          </p> */}
          <ProjectContainer />
        </main>
        <footer> created with love and react | &copy; {new Date().getFullYear()} mbshull </footer>
      </div>
    );
  }
}

export default App;
