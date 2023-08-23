import React from 'react'
import c from './AddToCart.module.scss'
import { useNavigate } from 'react-router-dom'
import {HiMinusSm, HiPlus} from 'react-icons/hi'

const AddToCart = ({product, choosenSize}) => {
  const [checkSize ,setCheckSize] = React.useState([])
  const navigate = useNavigate()
  const navigateToCart = () => navigate(`/cart/`)
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === product?.id)
  const checkS = cart?.filter(item => item.id === product?.id)
  .filter(el => el.choosenSize.includes(choosenSize))
  const index = cart?.findIndex(obj => obj.choosenSize === checkS[0]?.choosenSize);
  
  const postToCart = () => {
    cart?.push({...product, count: 1, choosenSize: choosenSize, image: product?.product_images[0].image})
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const increment = () => {
    !check ? cart?.push({...product, count: 1}) : checkS[0].count = checkS[0].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const decrement = () => {
    !check ? cart?.push({...product, count: 1}) : checkS[0].count = checkS[0].count - 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const deleteItem = () => {
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('kelvin_cart', JSON.stringify(cart));
  }


  return (
    <>
      {
        !check ? <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
        : checkS.length === 0
        ? <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
        : checkS[0].choosenSize === choosenSize ?
          <div className={c.go_to_cart}>
            <button onClick={navigateToCart}>Перейти в корзину</button>
            <div className={c.counter}>
              <button onClick={()=> checkS[0].count === 1 ? deleteItem() : decrement()}>
                <HiMinusSm />
              </button>
              <span>{checkS[0].count}</span>
              <button onClick={increment}>
                <HiPlus />
              </button>
            </div>
          </div> : ''
      }
    </>
  )
}

export default AddToCart
