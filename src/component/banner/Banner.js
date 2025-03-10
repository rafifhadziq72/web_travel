import React from 'react'
import { Carousel } from 'react-bootstrap';
import slider1 from "../../image/slider/1.png"
import slider2 from "../../image/slider/2.png"
import "../banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className='slider'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={slider1} className='d-block w-100' alt="First slide" />
            <Carousel.Caption>
              <div className='slider_des'>
                <h5 className='heading'>JOURNEY TO<span>EXPLORE WORLD</span></h5>
                <p className='sub_text'>Uncover breathtaking destinations and create unforgettable stories today.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={slider2} className='d-block w-100' alt="First slide" />
            <Carousel.Caption>
              <div className='slider_des'>
                <h5 className='heading'>BEAUTIFUL PLACE<span>TO VISIT</span></h5>
                <p className='sub_text'>Experience the charm and wonder of stunning destinations worldwide.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default Banner
