import React from 'react'
import c from './Slider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = ({product, setActiveImg}) => {

  return (
    <>
      <Swiper 
      direction={'vertical'} 
      slidesPerView={3} 
      navigation={{ 
        prevEl: '.swiper-button-prev' ,
        nextEl: '.swiper-button-next' , }} 
      modules={[Navigation]} 
      className={c.my_swiper}
      >
        {
          product?.product_images.map((item, key) => (
            <SwiperSlide key={item.id}>
              <img className={c.slide_img} src={item.image} alt="" onClick={()=> setActiveImg(key)}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="slider-buttons">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
    </>
  )
}

export default Slider
