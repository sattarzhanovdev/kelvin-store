import React from 'react'
import c from '../order/order.module.scss'
import { Components } from '../../components'
import OrderCard from './orderCard'
import { API } from '../../api'
import DeliveryInfo from '../../components/deliveryInfo'
import { useNavigate } from 'react-router-dom'
import { useClickAway } from '@uidotdev/usehooks'
import { ScrollTop } from '../../helpers'
  
const Order = () => {
  const [ cart, setCart ] = React.useState(null)
  const [ summa, setSumma ] = React.useState(null)
  const [ discount, setDiscount ] = React.useState(0)
  const [ deliverType, setDeliverType ] = React.useState('mail')
  const [ dep, setDep ] = React.useState(null)
  const [cityName, setCityName] = React.useState(null)

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('kelvin_cart_one'))
    const deliverType = localStorage.getItem('typeDeliver')
    const discount = localStorage.getItem('discount')
    setCart(cart)
    setSumma(String(cart?.reduce((acc, obj) => acc + obj.count * obj.price, 0)))
    setDeliverType(deliverType)
    setDiscount(discount)
    
    setTimeout(() => {
      setDep(Math.random())
    }, 100);
  }, [dep])

  const [ active2, setActive2 ] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
  })

  React.useEffect(() => {
    API.getCity().then(r => setCityName(r.data))
    ScrollTop()
  }, [])

  const navigate = useNavigate()


  const ref = useClickAway(() => {
    setActive2({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
      eighth: false,
      ninth: false,
      tenth: false 
    })
  });


  
  const width = window.innerWidth
  return (
    <div className={c.container}>
      <Components.Title text={'оформление заказа'}/>
      <div className={c.make} ref={ref}>
        <div className={c.left} ref={ref}>
          <DeliveryInfo city={cityName} active2={active2} setActive2={setActive2}/>
          <Components.Delivering />
          <div className={c.goods} ref={ref}>
            <h1>Мои товары</h1>
            <div className={c.cards}>
              {
                cart?.length !== 0 || !cart ?
                cart?.map((item, i) => (
                  <OrderCard
                    key={i}
                    id={item.id}
                    image={item.product_images[0].image}
                    title={item.title}
                    size={item.choosenSize}
                    price={item.price}
                    count={item.count}
                    obj={item}
                  />
                )) :
                <div className={c.empty}>
                  <h3>Ох, пусто в корзине... Надо срочно исправлять!</h3>
                  <button onClick={() => navigate('/products/')}>
                    Погнали выбирать крутые вещички
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
        <div className={c.right} ref={ref}>
          {width <= 1242 ? <Components.PayingBlock/> : ''}
          <Components.Paying 
            summa={summa}
            summaWithDelivering={deliverType === 'mail' ? summa : String(Number(summa) + 340)}
            delivering={deliverType === 'mail' ? 0 : 340}
            discount={Number(discount)}
          />
          {width >= 1242 ? <Components.PayingBlock/> : ''}
          <Components.Promocode />  
        </div>
      </div>
      {width <= 500 ? <Components.Policy /> : ''}
    </div>
  )
}

export default Order