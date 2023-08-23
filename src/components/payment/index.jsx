import React from 'react'
import c from './pay.module.scss'
import { IMaskInput } from 'react-imask';
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios';

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
  
  const publicKey = 'pk_a3bb7a21ac880f47df3c4aa854105';
  
  
  const paymentData = {
    Amount: info.summa,                  // Сумма платежа (в копейках или центах)
    Currency: 'RUB',               // Валюта платежа
    IPAddress: localStorage.getItem('ipAddress'),        // IP-адрес клиента
    Name: `${info.name} ${info.surname}`,             // Имя владельца карты
    Email: info.email,     // Электронная почта клиента
    CultureName: 'ru-RU',          // Язык интерфейса
    CardHolderMessage: 'Спасибо за покупку!', // Сообщение владельцу карты
  };

  const pay = (e) => {
    e.preventDefault()
    const publicId = 'pk_a3bb7a21ac880f47df3c4aa854105'; // Замените на ваш реальный public id CloudPayments
    const password = '60be40bc81506e4911cc9708b97131f7'; // Замените на ваш реальный пароль CloudPayments
    const apiUrl = 'https://api.cloudpayments.ru';

    const data = {
      /* Ваши данные для запроса */
    };

    const auth = `${publicId}:${password}`;
    const base64Auth = btoa(auth);

    fetch(`${apiUrl}/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${base64Auth}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Ответ от CloudPayments API:', responseData);
      })
      .catch((error) => {
        console.error('Произошла ошибка:', error);
      });
  }

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
          <button onClick={e => pay(e)}>Оплатить</button>
        </form>
      </div>
    </div>
  )
}

export default Payment