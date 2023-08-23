import React from 'react'
import c from './makingOrder.module.scss'
import { useNavigate } from 'react-router-dom'

const MakingOrder = () => {
  const Navigate = useNavigate()
  const [ summa, setSumma ] = React.useState('0')
  const [ dep, setDep ] = React.useState(null)

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
    setSumma(String(cart?.reduce((acc, obj) => acc + obj.count * obj.price, 0)))

    setTimeout(() => {
      setDep(Math.random())
    }, 100);
  }, [dep])

  return (
    <div className={c.makingOrder}>
        <button onClick={() => Navigate('/order/')}>Перейти к оформлению</button>
        <div className={c.down}>
            <h3>
                <span>Общая стоимость</span>
                {
                  summa?.length === 4 ? 
                  `${summa?.slice(0, 1)} ${summa?.slice(1, summa?.length)}` 
                  : summa?.length === 5 ?
                  `${summa?.slice(0, 2)} ${summa?.slice(2, summa?.length )}` 
                  : summa?.length === 6 ?
                  `${summa?.slice(0, 3)} ${summa?.slice(3, summa?.length )}` : 
                  summa?.length === 1 ? 
                  summa :
                  summa
                } ₽
            </h3>
        </div>
    </div>
  )
}

export default MakingOrder