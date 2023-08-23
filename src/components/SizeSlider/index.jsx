import React from 'react'
import c from './SizeSlider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { productSizes } from '../../utils'

const SizeSlider = ({product, setChoosenSize, choosenSize}) => {
  return (
    <>
      <Swiper 
        className={c.size_swiper} 
        spaceBetween={8}
        slidesPerView={window.innerWidth <= 414 ? 3 : 4}
        freeMode={true}
        modules={[FreeMode]}
        
      >
        {
          productSizes?.map((item, id) => (
            <SwiperSlide key={item.id}>
              <div className={ choosenSize === item.name ? `${c.active} ${c.size}` : c.size} onClick={() => setChoosenSize(item.name)}>
                <p>{item.name}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default SizeSlider
