import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({title, to}) => {
  const [selected, setSelected] = useState(false)
  return (
    <NavLink to={`/${to}`}>
      <div className={selected ? "navItem selected" : "navItem"}
          onClick={ () => setSelected(!selected)}
          style={{padding: '1em'}}
      >
      <p>{title}</p>
      </div>
    </NavLink>
  )
}

export default NavItem;