import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import NavPanel from './NavPanel';
import ProjectContainer from './components/ProjectContainer';
import Footer from './Footer';

library.add(fab)

class App extends Component {
  render() {
    return (
      <Router>
      <div id='App'>
        <Header />
        <NavPanel />
        <main>
            <Switch>
              <Route exact path='/'  />
              <Route exact path='/projects' component={ProjectContainer}  />
            </Switch>
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
