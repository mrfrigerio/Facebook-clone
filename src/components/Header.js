import React from 'react'
import facebook_logo from '../assets/facebook-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <img src={facebook_logo} alt="Facebook logo" />
      <div className="profile-link">
        <a href="#">Meu perfil<FontAwesomeIcon icon={faUserCircle} className="profile-icon" /></a>
      </div>
    </div>
  )
}

export default Header