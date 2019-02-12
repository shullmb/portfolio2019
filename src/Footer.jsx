import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHeart)

const iconClr = 'rgba(228, 228, 228,0.8)'

const Footer = () => {
  return (
    <footer> created with &nbsp; <FontAwesomeIcon icon={faHeart} color={iconClr} title='LOVE' /> &nbsp; &amp;&amp; &nbsp; <FontAwesomeIcon icon={['fab', 'react']} color={iconClr} title="REACT" /> &nbsp; | &copy;{new Date().getFullYear()} mbshull </footer>
  )
}

export default Footer;