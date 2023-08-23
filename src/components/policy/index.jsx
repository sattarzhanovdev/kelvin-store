import React from 'react'
import c from './policy.module.scss'
import { Link } from 'react-router-dom'

const Policy = () => {
  return (
    <div className={c.policy}>
      <p>
        Нажимая на кнопку, вы соглашаетесь с <Link to={'/'}>Условиями обработки перс. данных</Link>, а также с <Link to={'/'}>Условиями продажи</Link>
      </p>
    </div>
  )
}

export default Policy