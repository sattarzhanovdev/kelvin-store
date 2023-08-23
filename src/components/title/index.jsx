import React from 'react'
import c from './title.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Title = ({text}) => { 
  const path = useLocation().pathname
  const Navigate = useNavigate()
  return (
    <div className={c.container}>
      <div className={c.title}>
        {
          path === '/order/' ?
            <p onClick={()=> Navigate('/cart/')}>
              Вернуться в корзину
            </p>
          :
          null
        }
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Title