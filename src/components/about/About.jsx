import React from 'react'
import './about.css'
import Me from '../../assets/aboutme.jpg'
import {BiAward} from 'react-icons/bi'
import {BsFillPeopleFill,BsProjectorFill} from 'react-icons/bs'

const About = () => {
  return (
    <div className='app__about' id='#about'>
      <div className='app__about-content' >
        <div className='app__about-header'>
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className='container app__about-container'>
          <div className='app__about-container-img'>
          <img src={Me} alt="About-Image" />
          </div>
         <div className='app__about-container-content'>
          <div className='card__section'>
          <div className='app__about-container-content-card'>
          <BiAward className='card-image' />
          <h3>experience</h3>
          <small>3+years working</small>
          </div>
          <div className='app__about-container-content-card'>
            <BsFillPeopleFill className='card-image'/>
          <h3>Clients</h3>
          <small>300+ worldwide</small>
          </div>
          <div className='app__about-container-content-card'>
            <BsProjectorFill className='card-image' />
          <h3>Projects</h3>
          <small>80+ completed</small>
          </div>
          </div>
         
          <div className='app__about-btn'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt suscipit facere, non explicabo quibusdam laboriosam fugiat dolorum consequatur dignissimos commodi magni quo quis voluptate necessitatibus minima, similique vel adipisci?</p>
         <button className='btn-primary'>let's Talk</button>
         </div>
                 </div>

        
        
        </div>
        
      </div>
      
    </div>
  )
}

export default About
