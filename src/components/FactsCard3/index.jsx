import React from 'react'
import c from './FactsCard.module.scss'
import { motion } from 'framer-motion'


const FactsCard3 = () => {

  const [card1, setCard1] = React.useState(false);
  const [card2, setCard2] = React.useState(false);
  const [card3, setCard3] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Вычисляем положение, до которого нужно прокрутиться

      // Задайте желаемое значение положения
      const targetPosition1 = 
      window.innerWidth <= 425 ? 4445 : 
      window.innerWidth <= 768 ? 5000 : 
      window.innerWidth <= 1024 ? 5300 : 
      window.innerWidth <= 1366 ? 3900 :
      4050; 

      const targetPosition2 = 
      window.innerWidth <= 425 ? 4850 : 
      window.innerWidth <= 768 ? 5300 : 
      window.innerWidth <= 1024 ? 6000 :
      window.innerWidth <= 1366 ? 4450 : 
      4600;

      const targetPosition3 = 
      window.innerWidth <= 425 ? 5300 : 
      window.innerWidth <= 768 ? 5800 :  
      window.innerWidth <= 1024 ? 6450 : 
      window.innerWidth <= 1366 ? 4950 :
      5150;

      // Получаем текущую позицию прокрутки
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      // console.log(window.scrollY );
      // Проверяем, достигнута ли целевая позиция

      if (scrollPosition >= targetPosition1 && scrollPosition <= targetPosition2) {
        setCard1(true);
      }else {
        setCard1(false);
      }

      if(scrollPosition >= targetPosition2 && scrollPosition <= targetPosition3){
        setCard2('card2');
      }else {
        setCard2(false);
      }

      if(scrollPosition >= targetPosition3){
        setCard3('card3');
      }else {
        setCard3(false);
      }
    };

    // Добавляем прослушиватель события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Очищаем прослушиватель события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <motion.div
      className={ 
        window.innerWidth <= 500 ? c.card :
        card1 ? `${c.card1} ${c.card}` : 
        card2 ? `${c.card2} ${c.card}` : 
        card3 ? `${c.card3} ${c.card}` :  
        c.card
      }
    >
      <div className={c.title}>
        <div >
          3
        </div>
        <h1>Качество, на которое можно положиться</h1>
      </div>
      <div className={c.text}>
        <div>
          3
        </div>
        <p>
          Мы гордимся своим превосходством в качестве. В kelvin мы уделяем максимальное внимание каждой детали – от выбора материалов до производства. 
          <br /> 
          <br />
          Мы используем только самые высококачественные материалы и применяем строгие стандарты производства, чтобы гарантировать, что каждый продукт  прослужит вам долго и останется безупречным.
          <br />
          <br />
          Мы стремимся создавать вещи, которые станут вашими надежными спутниками в повседневной жизни и придадут вам уверенности в каждом шаге.
        </p>
      </div>
    </motion.div>
  )
}

export default FactsCard3