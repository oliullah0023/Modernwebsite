import React from 'react'
import './testimonial.css'
import Avtar1 from '../../assets/avatar1.jpg'
import Avtar2 from '../../assets/avatar2.jpg'
import Avtar3 from '../../assets/avatar3.jpg'
import Avtar4 from '../../assets/avatar4.jpg'


//import Swiper core and required modules
import {Navigation,  Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';




const data = [
  {
    avatar:Avtar1,
    name: 'Oliullah',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores tempora repudiandae.'
  },

  {
    avatar:Avtar2,
    name: 'Habib Ullah',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores tempora repudiandae.'
  },

  {
    avatar:Avtar3,
    name: 'Hasan Ullah',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores tempora repudiandae.'
  },

  {
    avatar:Avtar4,
    name: 'Bappy',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore asperiores tempora repudiandae.'
  }
]

const Testimonial = () => {
  return (
   <section id='testimonials'>

    <div className='testimonial-heading'>
    <h5>Review from clients</h5>
    <h3>Testimonials</h3>
    </div>
  
    <Swiper className='testimonial__container' 
       modules={[Navigation, Pagination, Scrollbar]}
       spaceBetween={60}
       slidesPerView={1}
       Navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
        >


      {
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide className='client__avatar' key={index}>
            <img src={avatar} alt="avatar" />
            <h4>{name}</h4>
            <small>{review}.</small>
          </SwiperSlide>
          )
        })
      }
   
      

   </Swiper>
   </section>
  )
}

export default Testimonial
