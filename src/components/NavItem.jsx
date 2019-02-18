import React, { useState } from 'react';

const NavItem = ({title}) => {
  const [selected, setSelected] = useState(false)
  return (
    <div className={selected ? "navItem selected" : "navItem"}
         onClick={ () => setSelected(!selected)}
         style={{padding: '1em'}}
    >
      <p>{title}</p>
    </div>
  )
}

export default NavItem;