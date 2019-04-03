import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({title, to}) => {
  return (
    <NavLink to={`/${to}`} 
             activeStyle={{fontWeight: 'bold'}}
             
    >
      <div className="NavItem">
        <p>{title}</p>
      </div>
    </NavLink>
  )
}

export default NavItem;