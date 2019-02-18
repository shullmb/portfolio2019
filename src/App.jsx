import React, { Component } from 'react';
import ProjectContainer from './components/ProjectContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from './Header';
import NavPanel from './NavPanel';
import Footer from './Footer';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div id='App'>
        <Header />
        <NavPanel />
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
