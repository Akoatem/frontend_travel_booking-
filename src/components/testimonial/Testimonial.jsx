import React from 'react'
import Slider from "react-slick"
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonial = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slideToScroll:1,
                    Infinite:true,
                    dots:true
                },

            },
            {
                breakpoint:576,
                settings:{
                    slideToShow: 1,
                    slideToScroll: 1,
                }
            }
        ]
    }
  return (
    <Slider {...settings}>
       
   <div className="testimonial py-4 px-3">
         <p>First of all let me thank you for designing such a
             wonderful and memorable tour for my family. 
             Ever since we got in touch with you,
              we could see your commitment of making our 
              trip memorable and the best it could be.
              It was indeed a smooth sailing for us. Everything was 
              available to us at ease. Tourism Review International is a 
              peer-reviewed journal that</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Samuel Doh</h6>
                    <p>Customer</p>
                </div>
              </div>
        </div>


<div className="testimonial py-4 px-3">
         <p>First of all let me thank you for designing such a
             wonderful and memorable tour for my family. 
             Ever since we got in touch with you,
              we could see your commitment of making our 
              trip memorable and the best it could be.
              It was indeed a smooth sailing for us. Everything was 
              available to us at ease. Tourism Review International is a 
              peer-reviewed journal that</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Angela Milker</h6>
                    <p>Custmer</p>
                </div>
              </div>
        </div>

        <div className="testimonial py-4 px-3">
         <p>City Centre is Cape Town’s vibrant business and commercial heart, with a mix of chain stores, 
            surf shops and fashion boutiques.Amid the bustle, the Company’s Garden is a peaceful 1600s 
            park with monuments and a rose garden, while the colonial Castle of 
            Good Hope has military and art museums. Dining options in the area span 
             pizzerias to upscale bistros, while gin bars and dance clubs stat</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">James Cannor</h6>
                    <p>Custmer</p>
                </div>
              </div>
        </div>

        <div className="testimonial py-4 px-3">
         <p>First of all let me thank you for designing such a
             wonderful and memorable tour for my family. 
             Ever since we got in touch with you,
              we could see your commitment of making our 
              trip memorable and the best it could be.
              It was indeed a smooth sailing for us. Everything was 
              available to us at ease. Tourism Review International is a 
              peer-reviewed journal that</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">James Cannor</h6>
                    <p>Custmer</p>
                </div>
              </div>
        </div>

        <div className="testimonial py-4 px-3">
         <p>First of all let me thank you for designing such a
             wonderful and memorable tour for my family. 
             Ever since we got in touch with you,
              we could see your commitment of making our 
              trip memorable and the best it could be.
              It was indeed a smooth sailing for us. Everything was 
              available to us at ease. Tourism Review International is a 
              peer-reviewed journal that</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">James Cannor</h6>
                    <p>Custmer</p>
                </div>
              </div>
        </div>
    </Slider>
  )
}

export default Testimonial