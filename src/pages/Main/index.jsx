import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'


const Main = () => {
  const [ scrollPixel, setScrollPixel ] = React.useState(0)
  const [scrollY, setScrollY] = React.useState(0);

  window.onscroll = () => {
    setScrollPixel(window.scrollY); // Value of scroll Y in px
  };

  const handleScroll = () => {
    window.innerWidth >= 500 ? setScrollY(window.scrollY) : setScrollY(0)
    
  };

  React.useEffect(() => {
    // Добавляем прослушиватель события scroll при монтировании компонента
    
    window.addEventListener('scroll', handleScroll);

    // Удаляем прослушиватель события scroll при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={c.container}>
      <div className={c.main}>
        <Components.Banner/>
        <div
          style={{
            position: 'relative',
            top: scrollY <= 100 ? 0 : `-${scrollPixel+300}px`,
            transition: '.5s'
          }} 
          className={c.scroll}
        >
          <Components.AboutBlock/>
          {/* <LottieAnimation /> */}
          <Components.Brand/>
          <Components.Products/>
          <Components.Facts/>
          {/* <Components.Logo/> */}
        </div>
      </div>
    </div>
  )
}

export default Main
