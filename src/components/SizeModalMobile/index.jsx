import React from 'react'
import c from './SizeModalMobile.module.scss'
import x from '../../img/X.svg'
import { GetSingleProducts } from '../../helpers'
import SizeSlider from '../SizeSlider'


const SizeModalMobile = ({item_id, setModal, choosenSize, setChoosenSize}) => {
  const {product} = GetSingleProducts(item_id)
  
 
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === item_id)
  const index = cart?.findIndex(obj => obj.id === item_id);
  
  const postToCart = () => {
    setModal(false)
    !check ? cart?.push({...product, choosenSize: choosenSize ,count: 1, image: product?.product_images[0].image}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  return (
    <div className={c.mobile_window}>
      <div className={c.size_window}>
        <div className={c.window_header}>
          <p>Выберите размер</p>
          <span onClick={() => setModal(false)}>
            <img src={x} alt="x" />
          </span>
        </div>
        <div className={c.size_slider}>
          <SizeSlider product={product} choosenSize={choosenSize} setChoosenSize={setChoosenSize}/>
        </div>
        <div className={c.add_btn}>
          <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  )
}

export default SizeModalMobile
