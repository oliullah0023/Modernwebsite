import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='app__footer'>
    <div className='app__footer-content'>
    <h1>EGATOR</h1>
    <nav className='footer_nav'>
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Testimonial</li>
       </ul>
    </nav>
    <div className='footer_icon'>
     <AiFillFacebook/>
     <AiFillInstagram/>
     <AiFillTwitterSquare/>
    </div>
    <h5>All rights reserved</h5>
    </div>
    </div>
  )
}

export default Footer
