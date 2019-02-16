import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHeart)

const Footer = () => {
  return (
    <footer> <small>mbshull.com | made with <FontAwesomeIcon icon={faHeart} title='LOVE' /> and <FontAwesomeIcon icon={['fab', 'react']} title="REACT" /> | &copy;{new Date().getFullYear()} Michael Shull </small></footer>
  )
}

export default Footer;