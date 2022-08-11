import React from 'react'
import logo from '../assets/Logo-GF.png'

export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='navbar'>
            <span className='logo'><img src={logo} alt="logo" /></span>
            <span>LogIn</span>
        </div>
    </div>
  )
}
