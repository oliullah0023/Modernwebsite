import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <div  className='app__contact'>
      <div className='app__contact-header'>
        <h5>Get In Touch</h5>
        <h3>Contact Me</h3>
      </div>
      <div className='app__contact-container'>
        <div className='app__contact-container-social'>
          <div className='email'>
             <HiOutlineMail/>
             <h3>Email</h3>
             <h5>oiliiah@gmail.com</h5>
             <small>Send a message</small>
             
          </div>

          <div className='email'>
             <BsMessenger/>
             <h3>Messanger</h3>
             <h5>oliullah 01</h5>
             <small>Send a message</small>
             
          </div>

          <div className='email'>
             <FaWhatsapp/>
             <h3>Whatsapp</h3>
             <h5>253 264 587</h5>
             <small>Send a message</small>
             
          </div>
        </div>

        <div className='app__contact-input'>
          <input type="text" placeholder='Your Full Name' required/>

          <input type="emil" placeholder='Your Email' required/>

          <textarea name="message" id=""  rows="10" placeholder='Your Message' required ></textarea>

         

          <button type='submit' className='btn-primary'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
