import React from 'react'
import c from './PayingBlock.module.scss'
import visa from '../../img/visa.svg'
import mir from '../../img/mir.svg'
import master from '../../img/mastercard.svg'

const PayingBlock = () => {
  return (
    <div className={c.pay}>
      <div className={c.block_1}>
        <p>Мы принимаем</p>
      </div>
      <div className={c.block_2}>
        <img src={visa} alt="visa" />
        <img src={mir} alt="mir" />
        <img src={master} alt="masterCard" />
      </div>
    </div>
  )
}

export default PayingBlock
