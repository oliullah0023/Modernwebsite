import React from 'react'
import './portfolio.css'
import Image1 from '../../assets/portfolio1.jpg'
import Image2 from '../../assets/portfolio2.jpg'
import Image3 from '../../assets/portfolio3.jpg'
import Image4 from '../../assets/portfolio4.jpg'
import Image5 from '../../assets/portfolio5.png'
import Image6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:Image1,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      },

    {
    id:2,
    image:Image2,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      },

  {
    id:3,
    image:Image3,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      },

 {
    id:4,
    image:Image4,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      },
 {
    id:5,
    image:Image5,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      },


 {
    id:6,
    image:Image6,
    title:'This is a portfolio website' ,
    github:'https://github.com/' ,
    demo: 'https://dribbble.com/'
      }


     

]
const Portfolio = () => {
  return (
    <div className='app__portfolio'>
      <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>
      

       <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>

       <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>

       <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>

       <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>


       <div className='app__portfolio-content'>
        <div className='app__portfolio-content-img'></div>
        <img src={Image1} alt="" />
        <h3>Cripto currency dashboard & financial visualization</h3>
        <div className='app__portfolio-buttons'>
         <a href="https://github.com/" target='_blank' className='btn' >Github</a>
         <a href="https://dribbble.com/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
       </div>

    </div>
  )
}

export default Portfolio
