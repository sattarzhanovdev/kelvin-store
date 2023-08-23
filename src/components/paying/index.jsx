import React from 'react'
import c from './makingOrder.module.scss'
import { Components } from '..'

const Paying = ({summa, summaWithDelivering, delivering, discount}) => {
    const withPercent = Number(summaWithDelivering) / 100 * Number(discount)
    const allSumma = String(summaWithDelivering - withPercent)
    const info = JSON.parse(localStorage.getItem('info'))

    const [ active, setActive ] = React.useState(false)

    localStorage.setItem('info', JSON.stringify({
        ...info,
        summa: allSumma
    }))

    const pay = () => {
        if(
            info.name.length !== 0 &&
            info.surname.length !== 0 &&
            info.email.length !== 0 &&
            info.phone.length !== 0 &&
            info.city.length !== 0 &&
            info.address.length !== 0 &&
            info.house.length !== 0 &&
            info.apartment.length !== 0 &&
            info.index.length !== 0 &&
            info.comment.length !== 0 
        ){
            setActive(!active)
        }else{
            alert('fill the area!')
        }
    }

    return (
        <>
            <div className={c.makingOrder}>
                <div className={c.up}>
                    <button
                        className={c.disabled}
                        onClick={() => pay()}
                    >
                        Оплатить картой онлайн
                    </button>
                    <h3>
                        <span>Общая стоимость</span>
                        {
                            allSumma?.length === 4 ? 
                            `${allSumma?.slice(0, 1)} ${allSumma?.slice(1, allSumma?.length)}` 
                            : allSumma?.length === 5 ?
                            `${allSumma?.slice(0, 2)} ${allSumma?.slice(2, allSumma?.length )}` 
                            : allSumma?.length === 6 ?
                            `${allSumma?.slice(0, 3)} ${allSumma?.slice(3, allSumma?.length )}` : 
                            allSumma
                        } ₽
                    </h3>
                </div>
                <div className={c.line1}></div>
                <div className={c.cart}>
                    <h3 className={c.title}>Ваша корзина</h3>
                    <div className={c.prices}>
                        <p>
                            <span>Товары</span>
                            {
                                summa?.length === 4 ? 
                                `${summa?.slice(0, 1)} ${summa?.slice(1, summa?.length)}` 
                                : summa?.length === 5 ?
                                `${summa?.slice(0, 2)} ${summa?.slice(2, summa?.length )}` 
                                : summa?.length === 6 ?
                                `${summa?.slice(0, 3)} ${summa?.slice(3, summa?.length )}` 
                                : summa
                            } ₽
                        </p>
                        <p>
                            <span>Доставка</span>
                            {delivering} ₽
                        </p>
                        <p>
                            <span>Скидка</span>
                            {discount} %
                        </p>
                    </div>
                </div>
                <div className={c.line}></div>
                <h3>
                    <span>Общая стоимость</span>
                    {
                        allSumma?.length === 4 ? 
                        `${allSumma?.slice(0, 1)} ${allSumma?.slice(1, allSumma?.length)}` 
                        : allSumma?.length === 5 ?
                        `${allSumma?.slice(0, 2)} ${allSumma?.slice(2, allSumma?.length )}` 
                        : allSumma?.length === 6 ?
                        `${allSumma?.slice(0, 3)} ${allSumma?.slice(3, allSumma?.length )}` : 
                        allSumma
                    } ₽
                </h3>
            </div>
            {
                active ?
                <Components.Payment setActive={setActive} /> :
                null
            }
        </>
    )
}

export default Paying