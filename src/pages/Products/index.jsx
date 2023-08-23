import React from 'react'
import c from './Products.module.scss'
import { GetProducts } from '../../helpers'
import ProductCard from '../../components/ProductCard'
import SizeModal from '../../components/SizeModal'
import SizeModalMobile from '../../components/SizeModalMobile'

const Products = () => {
  const { products } = GetProducts()
  const [modalWindow, setModalWindow] = React.useState(false)
  const [productId, setProductId] = React.useState(1)
  const [choosenSize, setChoosenSize] = React.useState('S')
  return (
    <div className={c.products}>
      {
        modalWindow && 
        window.innerWidth >= 500 ?
        <SizeModal 
          item_id={productId} 
          setModal={setModalWindow} 
          choosenSize={choosenSize} 
          setChoosenSize={setChoosenSize}
        /> : ''
      }
      {
        modalWindow && 
        window.innerWidth <= 500 ?
          <SizeModalMobile
            item_id={productId} 
            setModal={setModalWindow} 
            choosenSize={choosenSize} 
            setChoosenSize={setChoosenSize}
          /> : ''
                  
      }
      <div className={c.title}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      <div className={c.container}>
        {
          products?.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              image={item.product_images[0].image}
              title={item.title}
              price={item.price}
              obj={item}
              setModal={setModalWindow}
              setProductId={setProductId}
              choosenSize={choosenSize}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Products
