import React, { useState } from 'react';
import logo from './img/mbshull_logo.png';
import NavItem from './components/NavItem';

const NavPanel = props => {
  const [navLinks, setNavLinks] = useState(['~','Projects','Skills', 'Resume', 'About'])
  const [activeNav, setActiveNav] = useState(navLinks[1])
  return (
    <nav>
      <img src={logo} alt="mbshull.com" />
      {
        navLinks.map( (navLink,i) => <NavItem key={i} title={navLink} /> )
      }
    </nav>
  )
}

export default NavPanel;