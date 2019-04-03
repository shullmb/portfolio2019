import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import NavPanel from './NavPanel';
import Home from './components/Home';
import ProjectContainer from './components/ProjectContainer';
import SkillContainer from './components/SkillContainer';
import AboutContainer from './components/AboutContainer';
import Footer from './Footer';

library.add(fab, faExternalLinkAlt)

class App extends Component {
  render() {
    return (
      <Router>
      <div id='App'>
        <Header />
        <NavPanel />
        <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={ProjectContainer} />
              <Route exact path='/skills' component={SkillContainer} />
              <Route exact path='/about' component={AboutContainer} />
            </Switch>
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
