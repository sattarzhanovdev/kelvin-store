import React from 'react'
import c from './Brand.module.scss'
import shine from '../../img/shine.png'
import AOS from 'aos'

const Brand = () => {
  const [ scrollPixel, setScrollPixel ] = React.useState(0)

  window.onscroll = () => {
    setScrollPixel(window.scrollY); // Value of scroll Y in px
  };

  AOS.init()
  return (
    <div className={c.brand_container}>
      <div className={c.brand}>
        <div className={c.line}></div>
        <div className={c.container}>
          <div className={c.brand_text}>
            <div>
              <p
                data-aos="fade-up"         
              >
                бренд
              <span className={c.mr}></span></p> 
            </div>
            <div>
              <p
                data-aos="fade-up"         
              >
                который
              </p>
            </div>
            <div>
              <p 
                data-aos="fade-up"         
                className={c.text_left}
              >
                <span className={c.grey}>ценят за</span> уникальность
              </p>
            </div>
          </div>
        </div>
        <div 
          data-aos="fade-up" 
          className={c.brand_shine}
        >
          <img src={shine} alt="" />
          <div className={c.shine_text}>
            <p>
              <span>ЭТО НАШЕ ВРЕМЯ СИЯТЬ</span> - KELVIN
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
