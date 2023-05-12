import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div className='app__experience'>
      <div className='app__experience-header'>
        <h5>What skills I Have</h5>
        <h3>My Experience</h3>
      </div>
      <div className='app_experience-content'>
        <div className='app__experience-content-card'>
        <div className='header'> <h3>Frontend Development</h3></div>
        <div className='experience-container'>
        <div className='experience-details'>
         
         
         <BsFillPatchCheckFill className='icon-star' />

         <div> <h4>HTML</h4>
         <small>Experienced</small></div>
        
         </div>
         <div className='experience-details'>
         <BsFillPatchCheckFill className='icon-star' />
         <div><h4>CSS</h4>
         <small>Experienced</small></div>
         
         </div>
 
         <div className='experience-details'>
         <BsFillPatchCheckFill className='icon-star'/>
         <div>
         <h4>Javascript</h4>
         <small>Experienced</small>
         </div>
        
         </div>
 
         <div className='experience-details'>
         <BsFillPatchCheckFill  className='icon-star'/>
         <div><h4>React</h4>
         <small>Experienced</small></div>
         
         </div>
 
         <div className='experience-details'>
         <BsFillPatchCheckFill  className='icon-star'/>
         <div><h4>Tailwind CSS</h4>
         <small>Experienced</small></div>
         
         </div>
 
         <div className='experience-details'>
         <BsFillPatchCheckFill  className='icon-star'/>
         <div><h4>Bootstrap</h4>
         <small>Experienced</small></div>
         
         </div>
        </div>
       
        </div>



        <div className='app__experience-content-card'>
        <div className='header'> <h3>Backend Development</h3></div>
          <div className='experience-container'>

          <div className='experience-details'>
       
        <BsFillPatchCheckFill  className='icon-star'/>
        <div><h4>Node JS</h4>
        <small>Experienced</small></div>
        
        </div>

        <div className='experience-details'>
        <BsFillPatchCheckFill className='icon-star'/>
        <div> <h4>Express JS</h4>
        <small>Experienced</small></div>
       
        </div>

        <div className='experience-details'>
        <BsFillPatchCheckFill className='icon-star'/>
        <div><h4>Mongo DB</h4>
        <small>Experienced</small></div>
        
        </div>

        <div className='experience-details'>
        <BsFillPatchCheckFill className='icon-star'/>
        <div>    <h4>php</h4>
        <small>Experienced</small></div>
    
        </div>

        <div className='experience-details'>
        <BsFillPatchCheckFill className='icon-star'/>
        <div>   <h4>My SQL</h4>
        <small>Experienced</small></div>
     
        </div>
          </div>
          
        

        </div>
      </div>
      
    </div>
  )
}

export default Experience
