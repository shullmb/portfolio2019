import React, { Component } from 'react';
import logo from './img/mbshull_logo.png';
import ProjectContainer from './components/ProjectContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from './Header';
import Footer from './Footer';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div id='App'>
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default App;
