import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/mbshull_logo.png';
import NavItem from './components/NavItem';

const NavPanel = props => {
  const [navLinks, setNavLinks] = useState([
    {title: '~', to:''},
    {title: 'Projects', to:'projects'},
    {title: 'Skills', to:'skills'},
    {title: 'About', to:'about'}
  ])
  return (
    <nav>
      <NavLink to='/'>
        <img src={logo} alt="mbshull.com" />
      </NavLink>
      {
        navLinks.map( (navLink,i) => <NavItem key={i} title={navLink.title} to={navLink.to} /> )
      }
    </nav>
  )
}

export default NavPanel;