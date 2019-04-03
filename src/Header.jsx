import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconClr = '#222';

const Header = () => (
  <header>
    <h1>Michael Shull | Full Stack Web Development </h1>
    <div id="Social">
      <a href="https://github.com/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} color={iconClr} size='2x' />
      </a>
      <a href="https://linkedin.com/in/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} color={iconClr} size='2x' />
      </a>
      <a href="https://freecodecamp.com/shullmb" rel="noreferrer noopener" target="_blank">
        <FontAwesomeIcon icon={['fab', 'free-code-camp']} color={iconClr} size='2x' />
      </a>
    </div>
  </header>
)

export default Header;