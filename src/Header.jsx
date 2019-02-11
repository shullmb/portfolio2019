import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => (
  <header>
    <h1>Michael Shull | Full Stack Web Development</h1>
    <div>
      <a href="#" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="#" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="#" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'free-code-camp']} />
      </a>
    </div>
  </header>
)

export default Header;