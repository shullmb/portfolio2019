import React, { useState } from 'react';
import logo from './img/mbshull_logo.png';
import { BadgeButton } from './components/BadgeButton';

const NavPanel = props => {
  const [navLinks, setNavLinks] = useState(['~','Projects','Skills', 'Resume', 'About'])
  const [activeNav, setActiveNav] = useState(navLinks[1])
  return (
    <nav>
      <img src={logo} alt="mbshull.com" />
      {
        navLinks.map( (navLink,i) => (
          <div class="navItem">
            <BadgeButton value={navLink} key={i} />
          </div> 
        ))
      }
    </nav>
  )
}

export default NavPanel;