import React from 'react'
import c from './SizeModal.module.scss'
import x from '../../img/X.svg'
import { GetSingleProducts } from '../../helpers'
import {BiSolidChevronDown } from 'react-icons/bi'
import checkImg from '../../img/check.svg'
import { productSizes } from '../../utils'

const SizeModal = ({item_id, setModal, choosenSize, setChoosenSize}) => {
  const {product} = GetSingleProducts(item_id)
  const [activeDropdown, setActiveDropdown] = React.useState(false)
  
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === item_id)
  const index = cart?.findIndex(obj => obj.id === item_id);

  const postToCart = () => {
    setModal(false)
    !check ? cart?.push({...product, choosenSize: choosenSize ,count: 1, image: product?.product_images[0].image}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  return (
    <div className={c.size}>
      <div className={c.size_window}>
        <div className={c.window_header}>
          <p>Выберите размер</p>
          <span onClick={() => setModal(false)}>
            <img src={x} alt="x" />
          </span>
        </div>
        <div className={c.dropdown}>
          <div className={c.up} onClick={() => setActiveDropdown(!activeDropdown)}>  
            <li>{choosenSize === 0 ? productSizes[0]?.name : choosenSize}</li> <span className={ activeDropdown ? c.active_arrow : '' }><BiSolidChevronDown /></span>
          </div>
          <div className={c.container}>
            <div className={activeDropdown ? c.down_active : c.down_none}>
              {
                productSizes.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setChoosenSize(item.name)
                      setActiveDropdown(false)
                    }}
                    className={item.name === choosenSize ? c.active : null}
                  >
                    {item.name} <span>{choosenSize === item.name ? <img src={checkImg} alt='check' /> : null}</span>
                  </li>
                ))
              }
            </div>
          </div>
        </div>
        <div className={c.add_btn}>
          <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  )
}

export default SizeModal
