import React from 'react'
import c from './cart.module.scss'
import { Components } from '../../components'
import deliver from '../../img/deliver.svg'
import { useNavigate } from 'react-router-dom'
import { ScrollTop } from '../../helpers'

const Cart = () => {
  
  const [ cart, setCart ] = React.useState(null)

  React.useEffect(() => {
    ScrollTop()
  }, [])

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
    setTimeout(() => {
      setCart(cart)
    }, 100)
  }, [cart])

  const navigate = useNavigate()

  return (
    <div className={c.container}>
      <Components.Title text={'корзина'}/>
      {
        cart?.length !== 0 ? 
        <div className={c.cart}>
          <div className={c.cards}>
            {
              cart?.length !== 0 ?
              cart?.map((item, i) => (
                <Components.CartCard 
                  key={i}
                  i={i}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  size={item.choosenSize}
                  price={item.price}
                  count={item.count}
                  obj={item}
                />
              )) :
              <div className={c.nothing}>
                <h2>Ничего нет ;(</h2>
              </div>
            }
          </div>
          
          <div className={c.right}>
            <Components.MakingOrder />
            <div className={c.info}>
              <span>
                <img src={deliver} alt="deliver" />
                Бесплатная доставка от 12 000 ₽
              </span>
            </div>
          </div>
        </div> :
        <div className={c.empty}>
          <h3>Ох, пусто в корзине... Надо срочно исправлять!</h3>
          <button onClick={() => navigate('/products/')}>
            Погнали выбирать крутые вещички
          </button>
        </div>
      }
    </div>
  )
}

export default Cart