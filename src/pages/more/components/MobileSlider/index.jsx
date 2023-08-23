import React from 'react'
import c from './ModileSlider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ModileSlider = ({product}) => {
  
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className={c.mobile_my_swiper} spaceBetween={30}>
        {
          product?.product_images.map(item => (
            <SwiperSlide key={item.id}>
              <img className={c.mobile_slide_img} src={item.image} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default ModileSlider
