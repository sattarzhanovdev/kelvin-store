import React from 'react'
import c from './delivering.module.scss'
import { ImagesDelivering } from './image'
import { Icons } from './icons/'


const Delivering = () => {
  const [ type, setType ] = React.useState('mail')

  React.useEffect(() => {
    localStorage.setItem('typeDeliver', type)
  }, [type])

  return (
    <div className={c.delivering}>
      <h3>Способ доставки</h3>
      <form onChange={e => {
        setType(e.target.value)
      }}>
        <label 
          htmlFor='mail' 
          className={type === 'mail' ? c.active : ''}
        >
          <div className={c.left}>
            <input 
              type="radio" 
              id="mail" 
              name='radio'   
              value="mail"
              defaultChecked={type === 'mail' ? true : false}
            /> 
            <img 
              src={type === 'mail' ? Icons.active : Icons.disactive} 
              alt="Почта России" 
              className={c.icon}
            /> 
            <img 
              src={ImagesDelivering.mail} 
              alt="Почта России" 
            /> 
            <h3 className={type === 'mail' ? c.active_text : ''}>Почта России, 7-14 дней</h3>
          </div>
          <div className={c.right}>
            <h3 className={type === 'mail' ? c.active_text : ''}>0 ₽</h3>
          </div>
        </label>
        <label 
          htmlFor='yandex'
          className={type === 'yandex' ? c.active : ''}
        >
          <div className={c.left}>
            <input 
              type="radio" 
              id="yandex" 
              name='radio'
              value='yandex'
              defaultChecked={type === 'yandex' ? true : false}
            /> 
            <img 
              src={type === 'yandex' ? Icons.active : Icons.disactive} 
              alt="Яндекс ПВЗ" 
              className={c.icon}
            /> 
            <img 
              src={ImagesDelivering.yandex} 
              alt="Яндекс ПВЗ" 
            /> 
            <h3 className={type === 'yandex' ? c.active_text : ''}>
              Яндекс ПВЗ, 5-7 дней
            </h3>
          </div>
          <div className={c.right}>
            <h3 className={type === 'yandex' ? c.active_text : ''}>340 ₽</h3>
          </div>
        </label>
      </form>
    </div>
  )
}

export default Delivering