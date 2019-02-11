import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => (
  <header>
    <h1>Michael Shull | Full Stack Web Development</h1>
    <div>
      <a href="https://github.com/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="https://linkedin.com/in/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="https://freecodecamp.com/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'free-code-camp']} />
      </a>
    </div>
  </header>
)

export default Header;