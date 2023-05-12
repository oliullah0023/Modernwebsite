import React from 'react'
import {BsGithub } from 'react-icons/bs'
import {AiOutlineLinkedin,AiFillDribbbleCircle } from 'react-icons/ai'


const HeaderIcon = () => {
  return (
    <div className='header__icons'>
      <a href="http://linkedin.com" target='_blank'><BsGithub/></a>
      <a href="http://github.com" target='_blank'><AiOutlineLinkedin /></a>
      <a href="http://dribbble.com" target='_blank'><AiFillDribbbleCircle /></a>
      
    </div>
  )
}

export default HeaderIcon
