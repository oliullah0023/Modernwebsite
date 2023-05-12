import React, { useState } from 'react'
import './nav.css'
import  {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import  {MdOutlineMedicalServices} from 'react-icons/md'
import  {BsBookHalf} from 'react-icons/bs'

const Nav = () => {
const [activeNav,setactiveNav]= useState('#')

  return (
    <div className='app__navbar'>
      <div className='app__navbar-links'>
      <a href="#" onClick={()=> setactiveNav('#')} className={activeNav==='#' ? 'active' : ''}> <AiOutlineHome  /></a>
      <a href="#about"  onClick={()=> setactiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}> <AiOutlineUser  /></a>
      <a href="#experience" onClick={()=> setactiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''} > < BsBookHalf /></a>
      <a href="#services"  onClick={()=> setactiveNav('#services')} className={activeNav==='#services' ? 'active' : ''} > <MdOutlineMedicalServices  /></a>
      <a href="#contact"  onClick={()=> setactiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}> <AiOutlineMessage  /></a>
     
      </div>
    </div>
  )
}

export default Nav
