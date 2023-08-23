import React from 'react'
import c from './Banner.module.scss'
import banner from '../../img/banner-3.svg'
import { useViewportScroll, motion, useTransform } from 'framer-motion';


const Banner = () => {
  // const [ scrollPix, setScrollPix ] = React.useState(0)
  const [ dep, setDep ] = React.useState(0)
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  window.onscroll =  () => {
    localStorage.setItem('scroll', window.scrollY); 
  };

  React.useEffect(() => {
    // const scroll = localStorage.getItem('scroll')
    // setScrollPix(Number(scroll))
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])

  return (
    <div
      className={c.banner}
    >
      <div className={c.top_text}>
        <p>
          БРЕНД КОТОРЫЙ
          <br />
          ИЗМЕНИТ ВСЁ <span></span>
        </p>
      </div>
      <div className={c.banner_title}>
        <div className={c.banner_subtitle}>
          <p>Делаем качественно, красиво и с душой</p>
        </div>

        {
          // scrollPix > 600 ? 
          // <img src={banner} alt="kelvin" className={c.imageBanner} /> : 
          window.innerWidth <= 500 ? 
          <div>
            <img src={banner} alt="kelvin" className={c.imageBanner} />
          </div> :
          <motion.img 
            src={banner} 
            style={{scale}}
          />
        }
      </div>
    </div>  
  )
}

export default Banner