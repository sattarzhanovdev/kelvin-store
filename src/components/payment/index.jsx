import React from 'react'
import c from './pay.module.scss'
import { IMaskInput } from 'react-imask';
import { AiOutlineClose } from 'react-icons/ai'

const Payment = ({setActive}) => {
  const info = JSON.parse(localStorage.getItem('info'))
  const CardMask = "0000 0000 0000 0000";
  const cardMask = [
    {
      mask: CardMask,
    }
  ];
  const CardAvailableMask = "00 / 00";
  const cardAvailableMask = [
    {
      mask: CardAvailableMask,
    }
  ];

  return (
    <div className={c.payment__container}>
      <div className={c.payment}>
        <div className={c.close}>
          <li onClick={() => setActive(false)}>
            <AiOutlineClose />
          </li>
        </div>
        <div className={c.logo}>
          <img 
            src='/img/kelvin.png'
            alt="logo"
          />
          <h3>Сумма оплаты</h3>
          <p>{info.summa} ₽</p>
        </div>
        <form className={c.settings}>
          <IMaskInput
            mask={cardMask}
            placeholder='Номер карты'
          />
          <div>
            <IMaskInput
              mask={cardAvailableMask}
              placeholder='ММ / ГГ'
            />
            <input 
              type="text"
              placeholder='CVV'
              maxLength={3}
            />
          </div>
          <button>Оплатить</button>
        </form>
      </div>
    </div>
  )
}

export default Payment