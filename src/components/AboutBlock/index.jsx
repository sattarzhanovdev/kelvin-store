import React from 'react'
import c from './AboutBlock.module.scss'

const AboutBlock = () => {

  return (
    <div className={c.about_container}>
      <div className={c.about}>
        <div 
          className={c.right}
        >
          <p>
            <span className={c.ml}></span>
            kelvin – <span className={c.gray}>это смесь</span> ИННОВАЦИЙ,
            <br />
            КАЧЕСТВА, СТИЛЯ И МОДЫ 
          </p>
          <span className={c.text_down}>
            kirill domanskiy – <br /> <span className={c.gray}>основатель бренда kelvin</span>
          </span>
        </div>
        <div
          className={c.left}
        >
          <p className={c.p1}>
            <span className={c.gray}>Добро пожаловать в мир</span> kelvin – где стиль встречает инновации. Выражайте свою утонченность 
            и уникальность <span className={c.gray}>через наши изысканные коллекции. </span>
            <br />
            <br />
            Мы создаем вдохновляющий стиль, <span className={c.gray}>который</span>  оставит <span className={c.gray}>неизгладимое</span> впечатление. 
          </p>
          <p className={c.p2} >
            Мы стремимся к безупречности в каждой детали. Наши коллекции изготовлены из самых высококачественных материалов, придерживаясь инновационных технологий и строгих стандартов производства.
            <br />
            <br />
            Каждый шов, каждая кнопка, каждая отделка – все воплощено с максимальной тщательностью, чтобы удовлетворить самые высокие ожидания наших ценителей стиля.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutBlock