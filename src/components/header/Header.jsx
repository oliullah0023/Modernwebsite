import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import './HeaderIcon'
import HeaderIcon from './HeaderIcon'

const Header = () => {
  return (
    <div className='app__header'>
       <div className='container header__container'>
    <h5>Hello i'm</h5>
    <h1>Oli Ullah</h1>
    <h5>Fullstack Developer</h5>
    <CTA />
    <HeaderIcon />
    <a href="#contact" className='scroll__down'>Scroll Down</a>
    
    <div className='me'>
      <img src={ME} alt="me" />
    </div>

   
    </div>
    </div>
   
  )
}

export default Header
